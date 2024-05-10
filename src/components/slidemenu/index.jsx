import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/icons/logo.png';
import Github from '../../assets/icons/github.png';
import Linkedin from '../../assets/icons/linkedin.png';

import './index.css';

const Component = ({ show, close }) => {

	const [width, setWidth] = useState(window.innerWidth);
	const navigate = useNavigate();

	const _handleNavigate = (destination, e) => {
		e.preventDefault();

		navigate(`/${destination}`);
		window.scrollTo({ top: 0, behavior: 'smooth' });
		close();
	};

	const _handleLink = (val) => {
		let url = val === 1 ? 'https://github.com/dyobi' : 'https://www.linkedin.com/in/dyobi';

		window.open(url, '_blank');
	};

	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth), false);

		if (width > 1000 && show) {
			close();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [width]);

	return (
		<div className='slide_menu_container' onClick={() => close()}>
			<div className='slide_menu' onClick={(e) => e.stopPropagation()}>
				<div className='slide_menu_top'>
					<div className='main_menu_logo' onClick={(e) => _handleNavigate('', e)}>
						<img src={Logo} className='main_logo_img' alt='' />
						<span>Jacob</span>
					</div>
					<span>Web Developer</span>
				</div>
				<div className='main_menu'>
					<div className='each_menu' onClick={(e) => _handleNavigate('about', e)}>
						<div>
							<span className='first_letter'>A</span>
							<span>bout</span>
						</div>
					</div>
					<div className='each_menu' onClick={(e) => _handleNavigate('skills', e)}>
						<div>
							<span className='first_letter'>S</span>
							<span>kills</span>
						</div>
					</div>
					<div className='each_menu' onClick={(e) => _handleNavigate('work', e)}>
						<div>
							<span className='first_letter'>W</span>
							<span>ork</span>
						</div>
					</div>
					<div className='each_menu' onClick={(e) => _handleNavigate('contact', e)}>
						<div>
							<span className='first_letter'>C</span>
							<span>ontact</span>
						</div>
					</div>
				</div>
				<div className='slide_menu_bottom'>
					<img src={Github} className='link_icon' alt='' onClick={() => _handleLink(1)} />
					<img src={Linkedin} className='link_icon' alt='' onClick={() => _handleLink(2)} />
				</div>
			</div>
		</div>
	);
};

export default Component;
