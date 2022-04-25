import { useState, useEffect } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import $ from 'jquery';

import Github from '../../assets/icons/github.png';
import Linkedin from '../../assets/icons/linkedin.png';

import './index.css';

const TopNav = () => {
	return (
		<div className='top_nav'>
			<CgMenuGridO className='nav_icon' />
		</div>
	);
};

const SideNav = () => {

	const _handleLink = (val) => {
		let url = val === 1 ? 'https://github.com/dyobi' : 'https://www.linkedin.com/in/dyobi/';

		window.open(url, '_blank');
	};

	return (
		<div className='side_nav'>
			<div className='main_menu_top'>
				<div className='main_menu_logo'>
					<div className='main_logo_img' />
					<span>Luke</span>
				</div>
				<span>Web Developer</span>
			</div>
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
			<div className='main_menu_bottom'>
				<img src={Github} className='link_icon' alt='' onClick={() => _handleLink(1)} />
				<img src={Linkedin} className='link_icon' alt='' onClick={() => _handleLink(2)} />
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
			$('.side_nav').css('transform', 'translateX(0)');

			$('.top_nav').css('opacity', 0);
			$('.top_nav').css('transform', 'translateY(-100%)');

			$('.core').css('padding-left', '130px');
			// $('.core').css('padding-top', '0');
			$('.core').css('width', 'calc(100% - 130px)');
			// $('.core').css('height', '100vh');
		} else {
			$('.side_nav').css('opacity', 0);
			$('.side_nav').css('transform', 'translateX(-100%)');

			$('.top_nav').css('opacity', 1);
			$('.top_nav').css('transform', 'translateY(0)');

			$('.core').css('padding-left', '0');
			// $('.core').css('padding-top', '60px');
			$('.core').css('width', '100%');
			// $('.core').css('height', 'calc(100vh - 60px)');
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