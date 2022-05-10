import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/icons/logo.png';
import Github from '../../assets/icons/github.png';
import Linkedin from '../../assets/icons/linkedin.png';

import './index.css';

const Component = ({ close }) => {

	const navigate = useNavigate();

	const _handleNavigate = (destination, e) => {
		navigate(`/${destination}`);
		close(e);
	};

	const _handleLink = (val) => {
		let url = val === 1 ? 'https://github.com/dyobi' : 'https://www.linkedin.com/in/dyobi';

		window.open(url, '_blank');
	};

	return (
		<div className='slide_menu_container' onClick={(e) => close(e)}>
			<div className='slide_menu' onClick={(e) => e.stopPropagation()}>
				<div className='slide_menu_top'>
					<div className='main_menu_logo' onClick={() => navigate('/')}>
						<img src={Logo} className='main_logo_img' alt='' />
						<span>Luke</span>
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