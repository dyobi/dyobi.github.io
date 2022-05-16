import { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';

const _initOscillator = (canvas) => {

	const ctx = canvas?.getContext('2d');

	let target = {},
		tendrils = [],
		scroll = 0,
		windowHeight = document.body.scrollHeight,
		settings = {
			debug: false,
			friction: 0.5,
			trails: 30,
			size: 50,
			dampening: 0.25,
			tension: 0.98
		};

	class Node {
		constructor() {
			this.x = 0;
			this.y = 0;
			this.vx = 0;
			this.vy = 0;
		};
	};

	class Oscillator {
		constructor(options) {
			this.init(options || {});
			this.value = 0;
		};

		init(options) {
			this.phase = options.phase || 0;
			this.offset = options.offset || 0;
			this.frequency = options.frequency || 0.001;
			this.amplitude = options.amplitude || 1;
		};

		update() {
			this.phase += this.frequency;
			this.value = this.offset + Math.sin(this.phase) * this.amplitude;

			return this.value;
		};

		value() {
			return this.value;
		};
	};

	class Tendril {
		constructor(options) {
			this.init(options || {});
		};

		init(options) {
			this.spring = options.spring + (Math.random() * 0.1) - 0.05;
			this.friction = settings.friction + (Math.random() * 0.01) - 0.005;
			this.nodes = [];

			for (let i = 0, node; i < settings.size; i++) {
				node = new Node();
				node.x = target.x;
				node.y = target.y;

				this.nodes.push(node);
			};
		};

		update() {
			let spring = this.spring,
				node = this.nodes[0];

			node.vx += (target.x - node.x) * spring;
			node.vy += (target.y - node.y) * spring;

			for (let prev, i = 0; i < this.nodes.length; i++) {
				node = this.nodes[i];

				if (i > 0) {
					prev = this.nodes[i - 1];

					node.vx += (prev.x - node.x) * spring;
					node.vy += (prev.y - node.y) * spring;
					node.vx += prev.vx * settings.dampening;
					node.vy += prev.vy * settings.dampening;
				}

				node.vx *= this.friction;
				node.vy *= this.friction;
				node.x += node.vx;
				node.y += node.vy;

				spring *= settings.tension;
			};
		};

		draw() {
			let x = this.nodes[0].x,
				y = this.nodes[0].y + scroll,
				a, b;

			ctx.beginPath();
			ctx.moveTo(x, y);

			for (var i = 1; i < this.nodes.length - 2; i++) {
				a = this.nodes[i];
				b = this.nodes[i + 1];
				x = (a.x + b.x) * 0.5;
				y = (a.y + b.y) * 0.5;

				ctx.quadraticCurveTo(a.x, a.y + scroll, x, y + scroll);
			}
			a = this.nodes[i];
			b = this.nodes[i + 1];

			ctx.quadraticCurveTo(a.x, a.y + scroll, b.x, b.y + scroll);
			ctx.stroke();
			ctx.closePath();
		};
	};

	const _init = (e) => {
		document.removeEventListener('mousemove', _init);
		document.removeEventListener('touchstart', _init);

		document.addEventListener('mousemove', _mousemove, { passive: false });
		document.addEventListener('touchmove', _mousemove, { passive: false });
		document.addEventListener('touchstart', _touchstart, { passive: false });

		_mousemove(e);
		_reset();
		_loop();
	};

	const _reset = () => {
		tendrils = [];

		for (let i = 0; i < settings.trails; i++) {
			tendrils.push(new Tendril({
				spring: 0.45 + 0.025 * (i / settings.trails)
			}));
		};
	};

	const _loop = () => {
		if (!ctx.running) {
			return;
		} else {
			if (windowHeight !== document.body.scrollHeight) {
				windowHeight = document.body.scrollHeight;
				_resize();
				scroll = 0;
			}
			ctx.globalCompositeOperation = 'source-over';
			ctx.fillStyle = '#1D1D1D';
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			ctx.globalCompositeOperation = 'lighter';
			ctx.strokeStyle = 'hsla(346,98%,56%,0.25)';
			ctx.lineWidth = 1;

			for (let i = 0, tendril; i < settings.trails; i++) {
				tendril = tendrils[i];
				tendril.update();
				tendril.draw();
			};

			ctx.frame++;
			requestAnimationFrame(_loop);
		}
	};

	const _resize = () => {
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = document.body.scrollHeight;
	};

	const _scroll = () => {
		scroll = window.scrollY || document.documentElement.scrollTop;
	}

	const _start = () => {
		if (!ctx.running) {
			ctx.running = true;
			_loop();
		}
	};

	const _stop = () => {
		ctx.running = false;
	};

	const _mousemove = (e) => {
		if (e.touches) {
			target.x = e.touches[0].pageX;
			target.y = e.touches[0].pageY - scroll;
		} else {
			target.x = e.clientX
			target.y = e.clientY;
		}
		e.preventDefault();
	};

	const _touchstart = (e) => {
		if (e.touches.length === 1) {
			target.x = e.touches[0].pageX;
			target.y = e.touches[0].pageY - scroll;
		}
	};

	if (ctx && !isMobile) {

		window.requestAnimationFrame = (() => {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || ((fn) => {
				window.setTimeout(fn, 1000 / 60);
			});
		})();

		ctx.running = true;
		ctx.frame = 1;

		new Oscillator({
			phase: Math.random() * Math.TWO_PI,
			amplitude: 85,
			frequency: 0.0015,
			offset: 285
		});

		document.addEventListener('mousemove', _init, { passive: false });
		document.addEventListener('touchstart', _init, { passive: false });
		document.body.addEventListener('orientationchange', _resize);
		window.addEventListener('resize', _resize);
		window.addEventListener('scroll', _scroll);
		window.addEventListener('focus', _start);
		window.addEventListener('blur', _stop);

		_resize();
	}

};

const Component = () => {

	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = window.innerWidth;
		canvas.height = document.body.scrollHeight;

		_initOscillator(canvasRef.current);
	}, []);

	return (
		<canvas ref={canvasRef} style={{ position: 'absolute', zIndex: '-1' }}></canvas>
	);
};

export default Component;