function initOscillator(remove) {

	if (!remove) {
		let ctx,
			// form,
			// buffer,
			target = {},
			tendrils = [],
			settings = {};

		settings.debug = false;
		settings.friction = 0.5;
		settings.trails = 30;
		settings.size = 50;
		settings.dampening = 0.25;
		settings.tension = 0.98;

		// ##############
		// # oscillator #
		// ##############
		function Oscillator(options) {
			this.init(options || {});
		};
		Oscillator.prototype = (function () {
			let value = 0;

			return {
				init: function (options) {
					this.phase = options.phase || 0;
					this.offset = options.offset || 0;
					this.frequency = options.frequency || 0.001;
					this.amplitude = options.amplitude || 1;
				},
				update: function () {
					this.phase += this.frequency;
					value = this.offset + Math.sin(this.phase) * this.amplitude;

					return value;
				},
				value: function () {
					return value;
				}
			};
		})();

		// ###########
		// # tendril #
		// ###########
		function Tendril(options) {
			init(options || {});
		};
		Tendril.prototype = (function () {
			class Node {
				constructor() {
					this.x = 0;
					this.y = 0;
					this.vx = 0;
					this.vy = 0;
				}
			}

			return {
				init: function (options) {
					this.spring = options.spring + (Math.random() * 0.1) - 0.05;
					this.friction = settings.friction + (Math.random() * 0.01) - 0.005;
					this.nodes = [];

					for (let i = 0, node; i < settings.size; i++) {
						node = new Node();
						node.x = target.x;
						node.y = target.y;

						this.nodes.push(node);
					}
				},
				update: function () {
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
				},
				draw: function () {
					let x = this.nodes[0].x,
						y = this.nodes[0].y,
						a, b;

					ctx.beginPath();
					ctx.moveTo(x, y);

					for (let i = 1; i < this.nodes.length - 2; i++) {
						a = this.nodes[i];
						b = this.nodes[i + 1];
						x = (a.x + b.x) * 0.5;
						y = (a.y + b.y) * 0.5;

						ctx.quadraticCurveTo(a.x, a.y, x, y);
					}

					a = this.nodes[i];
					b = this.nodes[i + 1];

					ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
					ctx.stroke();
					ctx.closePath();
				}
			};
		})();

		function init(e) {
			document.removeEventListener('mousemove', init);
			document.removeEventListener('touchstart', init);

			document.addEventListener('mousemove', mousemove);
			document.addEventListener('touchmove', mousemove);
			document.addEventListener('touchstart', touchstart);

			mousemove(e);
			reset();
			loop();
		};

		function reset() {
			tendrils = [];

			for (let i = 0; i < settings.trails; i++) {
				tendrils.push(new Tendril({
					spring: 0.45 + 0.025 * (i / settings.trails)
				}));
			}
		};

		function loop() {
			if (!ctx.running) {
				return;
			} else {
				ctx.globalCompositeOperation = 'source-over';
				ctx.fillStyle = '#1D1D1D';
				ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
				ctx.globalCompositeOperation = 'lighter';
				ctx.strokeStyle = 'hsla(346,98%,56%,0.25)';
				// ctx.strokeStyle = 'hsla(171,98%,56%,0.25)';
				ctx.lineWidth = 1;

				for (let i = 0, tendril; i < settings.trails; i++) {
					tendril = tendrils[i];
					tendril.update();
					tendril.draw();
				}

				ctx.frame++;
				requestAnimFrame(loop);
			}
		};

		function resize() {
			ctx.canvas.width = window.innerWidth;
			ctx.canvas.height = window.innerHeight;
		};

		function start() {
			if (!ctx.running) {
				ctx.running = true;
				loop();
			}
		};

		function stop() {
			ctx.running = false;
		};

		function mousemove(e) {
			if (e.touches) {
				target.x = e.touches[0].pageX;
				target.y = e.touches[0].pageY;
			} else {
				target.x = e.clientX
				target.y = e.clientY;
			}
			e.preventDefault();
		};

		function touchstart(e) {
			if (e.touches.length == 1) {
				target.x = e.touches[0].pageX;
				target.y = e.touches[0].pageY;
			}
		};

		// function save() {
		// 	if (!buffer) {
		// 		buffer = document.createElement('canvas');
		// 		buffer.width = screen.availWidth;
		// 		buffer.height = screen.availHeight;
		// 		buffer.ctx = buffer.getContext('2d');
		// 	}

		// 	buffer.ctx.fillStyle = 'rgba(8,5,16)';
		// 	buffer.ctx.fillRect(0, 0, buffer.width, buffer.height);

		// 	buffer.ctx.drawImage(canvas,
		// 		Math.round(buffer.width / 2 - canvas.width / 2),
		// 		Math.round(buffer.height / 2 - canvas.height / 2)
		// 	);

		// 	window.open(buffer.toDataURL(), 'wallpaper', 'top=0,left=0,width=' + buffer.width + ',height=' + buffer.height);
		// };

		window.requestAnimationFrame = (function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (fn) {
				window.setTimeout(fn, 1000 / 60)
			};
		})();

		ctx = document.getElementById('canvas').getContext('2d');

		ctx.running = true;
		ctx.frame = 1;

		hue = new Oscillator({
			phase: Math.random() * Math.TWO_PI,
			amplitude: 85,
			frequency: 0.0015,
			offset: 285
		});

		document.addEventListener('mousemove', init);
		document.addEventListener('touchstart', init);
		document.body.addEventListener('orientationchange', resize);
		window.addEventListener('resize', resize);
		window.addEventListener('focus', start);
		window.addEventListener('blur', stop);

		resize();
	} else {
		document.body.removeEventListener('orientationchange', resize);
		window.removeEventListener('resize', resize);
		window.removeEventListener('focus', start);
		window.removeEventListener('blur', stop);

		document.removeEventListener('mousemove', mousemove);
		document.removeEventListener('touchmove', mousemove);
		document.removeEventListener('touchstart', touchstart);
	}

};

// export default initOscillator;