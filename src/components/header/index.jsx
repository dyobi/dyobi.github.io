import { useState, useEffect } from 'react';
import $ from 'jquery';

import './index.css';

const TopNav = () => {
	return (
		<div className='top_nav'>
			hello
		</div>
	);
};

const SideNav = () => {
	return (
		<div className='side_nav'>
			<div className='main_menu'>
				<div className='each_menu'>
					<div>
						<span className='first_letter'>A</span>
						<span>bout</span>
					</div>
				</div>
				<div className='each_menu'>
					<div>
						<span className='first_letter'>S</span>
						<span>kills</span>
					</div>
				</div>
				<div className='each_menu'>
					<div>
						<span className='first_letter'>W</span>
						<span>ork</span>
					</div>
				</div>
				<div className='each_menu'>
					<div>
						<span className='first_letter'>C</span>
						<span>ontact</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const Component = () => {

	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth), false);

		if (width > 1000) {
			$('.side_nav').css('opacity', 1);
			$('.top_nav').css('opacity', 0);
			$('.core').css('padding-left', '130px');
			$('.core').css('padding-top', '0');
			$('.core').css('width', 'calc(100% - 130px)');
			$('.core').css('height', '100vh');
		} else {
			$('.side_nav').css('opacity', 0);
			$('.top_nav').css('opacity', 1);
			$('.core').css('padding-left', '0');
			$('.core').css('padding-top', '60px');
			$('.core').css('width', '100%');
			$('.core').css('height', 'calc(100vh - 60px)');
		}
	}, [width]);

	return (
		<>
			<SideNav />
			<TopNav />
		</>
	);
};

export default Component;