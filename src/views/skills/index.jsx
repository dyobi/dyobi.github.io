import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

import './index.css';

const Component = () => {

	const navigate = useNavigate();
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		setTimeout(() => {
			$('.frontend').css('backgroundColor', '#E7527C');
			$('.frontend').css('width', '90%');

			setTimeout(() => {
				$('.backend').css('backgroundColor', '#FFCDF3');
				$('.backend').css('width', '80%');

				setTimeout(() => {
					$('.reactjs').css('backgroundColor', '#D26CD5');
					$('.reactjs').css('width', '85%');

					setTimeout(() => {
						$('.springboot').css('backgroundColor', '#08FDD8');
						$('.springboot').css('width', '70%');
					}, 200);
				}, 200);
			}, 200);
		}, 200);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth), false);
	}, [width]);

	return (
		<div className='skills_container'>
			<div className='text_zone'>
				<h2>
					<span>S</span>
					<span>k</span>
					<span>i</span>
					<span>l</span>
					<span>l</span>
					<span>s</span>
					<span>&nbsp;</span>
					<span>&amp;</span>
					{width > 1000 ?
						<br />
						:
						<span>&nbsp;</span>
					}
					<span>E</span>
					<span>x</span>
					<span>p</span>
					<span>e</span>
					<span>r</span>
					<span>i</span>
					<span>e</span>
					<span>n</span>
					<span>c</span>
					<span>e</span>
				</h2>
				<span>Highly Self Motivated Junior Developer with over 2 years of experience in F/E, B/E and databases. Focused on expanding knowledge and abilities in website design, programming and quality assurance.</span>
				<span>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is building small and medium web apps, features, and interactive layouts. Also am a self and quick learner with strong debugging skills.</span>
				<span>Visit my <span onClick={() => window.open('https://www.linkedin.com/in/dyobi', '_blank')}>LinkedIn</span> profile for more details or just <span onClick={() => navigate('/contact')}>contact</span> me.</span>
			</div>
			<div className='detail_zone'>
				<div className='detail_chart'>
					<span>Front-end</span>
					<div className='graph'>
						<div className='frontend' />
					</div>
				</div>
				<div className='detail_chart'>
					<span>Back-end</span>
					<div className='graph'>
						<div className='backend' />
					</div>
				</div>
				<div className='detail_chart'>
					<span>ReactJS</span>
					<div className='graph'>
						<div className='reactjs' />
					</div>
				</div>
				<div className='detail_chart'>
					<span>Springboot &amp; NodeJS</span>
					<div className='graph'>
						<div className='springboot' />
					</div>
				</div>
				<div className='academics'>
					<div className='rows'>
						<h5>42 SV</h5>
						<p>2019-2021</p>
						<span>A private, non-profit and tuition-free bootcamp located in Silicon Valley. Peer to peer learning, with an emphasis on figuring things out by myself.</span>
					</div>
					<div className='rows'>
						<h5>KG IT BANK</h5>
						<p>2021-2022</p>
						<span>A bootcamp located in Seoul. Classes are based on Java Spring &amp; Springboot for a half year. Including experience with AWS &amp; Jsp.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Component;