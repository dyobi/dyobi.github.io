import { useNavigate } from 'react-router-dom';

import Button from '../button';

import Image1 from '../../assets/images/img1.png';
import Image2 from '../../assets/images/img2.png';
import Image3 from '../../assets/images/img3.png';

import './index.css';

const Component = () => {

	const navigate = useNavigate();

	return (
		<div className='section_home_main_info'>
			<div className='text_zone'>
				<h1>
					<span>H</span>
					<span>e</span>
					<span>l</span>
					<span>l</span>
					<span>o</span>
					<span>,</span>
					<br />
					<span>I</span>
					<span>'</span>
					<span>m</span>
					<span>&nbsp;</span>
					<span>L</span>
					<span>u</span>
					<span>k</span>
					<span>e</span>
					<span>,</span>
					<br />
					<span>w</span>
					<span>e</span>
					<span>b</span>
					<span>&nbsp;</span>
					<span>d</span>
					<span>e</span>
					<span>v</span>
					<span>e</span>
					<span>l</span>
					<span>o</span>
					<span>p</span>
					<span>e</span>
					<span>r</span>
					<span>.</span>
				</h1>
				<p>Full Stack Developer / Creative Engineer</p>
				<Button onClick={() => navigate('/contact')} title='Contact me' />
			</div>
			<div className='profile_zone'>
				<img className='profile_image' src={Image1} alt='' />
				<img className='profile_image' src={Image2} alt='' />
				<img className='profile_image' src={Image3} alt='' />
			</div>
		</div>
	);
};

export default Component;