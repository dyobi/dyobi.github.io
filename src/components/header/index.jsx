import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import $ from 'jquery';

import Logo from '../../assets/icons/logo.png';
import Github from '../../assets/icons/github.png';
import Linkedin from '../../assets/icons/linkedin.png';

import './index.css';

const TopNav = () => {

	const navigate = useNavigate();

	return (
		<>
			<div className='top_nav_left' onClick={() => navigate('/')}>
				<img src={Logo} className='nav_logo' alt='' />
			</div>
			<div className='top_nav_right'>
				<CgMenuGridO className='nav_icon' />
			</div>
		</>
	);
};

const SideNav = () => {

	const navigate = useNavigate();

	const _handleLink = (val) => {
		let url = val === 1 ? 'https://github.com/dyobi' : 'https://www.linkedin.com/in/dyobi';

		window.open(url, '_blank');
	};

	return (
		<div className='side_nav'>
			<div className='main_menu_top'>
				<div className='main_menu_logo' onClick={() => navigate('/')}>
					<img src={Logo} className='main_logo_img' alt='' />
					<span>Luke</span>
				</div>
				<span>Web Developer</span>
			</div>
			<div className='main_menu'>
				<div className='each_menu' onClick={() => navigate('/about')}>
					<div>
						<span className='first_letter'>A</span>
						<span>bout</span>
					</div>
				</div>
				<div className='each_menu' onClick={() => navigate('/skills')}>
					<div>
						<span className='first_letter'>S</span>
						<span>kills</span>
					</div>
				</div>
				<div className='each_menu' onClick={() => navigate('/work')}>
					<div>
						<span className='first_letter'>W</span>
						<span>ork</span>
					</div>
				</div>
				<div className='each_menu' onClick={() => navigate('/contact')}>
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

			$('.top_nav_left').css('opacity', 0);
			$('.top_nav_left').css('transform', 'translateY(-100%)');

			$('.top_nav_right').css('opacity', 0);
			$('.top_nav_right').css('transform', 'translateY(-100%)');

			$('.core').css('padding-left', '130px');
			$('.core').css('width', 'calc(100% - 130px)');
		} else {
			$('.side_nav').css('opacity', 0);
			$('.side_nav').css('transform', 'translateX(-100%)');

			$('.top_nav_left').css('opacity', 1);
			$('.top_nav_left').css('transform', 'translateY(0)');

			$('.top_nav_right').css('opacity', 1);
			$('.top_nav_right').css('transform', 'translateY(0)');

			$('.core').css('padding-left', '0');
			$('.core').css('width', '100%');
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