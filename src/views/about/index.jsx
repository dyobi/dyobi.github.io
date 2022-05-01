import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TagCloud from '../../utils/tagcloud';

import './index.css';

const Component = () => {

	const navigate = useNavigate();

	const myTags = [
		'JavaScript', 'CSS', 'HTML',
		'Java', 'C', 'Python',
		'React', 'Redux', 'Jsp',
		'JQuery', 'NodeJS', 'Spring',
		'Spring Boot', 'Jpa', 'React Native',
		'Swift', 'MySQL', 'Oracle', 'Firebase',
		'AWS', 'Docker'
	];

	useEffect(() => {
		const tagCloud = TagCloud('.canvas_zone', myTags, {
			radius: 200
		});

		return () => tagCloud.destroy();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='about_container'>
			<div className='text_zone'>
				<h2>
					<span>M</span>
					<span>e</span>
					<span>,</span>
					<span>&nbsp;</span>
					<span>M</span>
					<span>y</span>
					<span>s</span>
					<span>e</span>
					<span>l</span>
					<span>f</span>
					<span>&nbsp;</span>
					<span>&amp;</span>
					<span>&nbsp;</span>
					<span>I</span>
				</h2>
				<span>Dedicated and efficient full stack developer located in California with 2+ years personal experience in application layers, presentation layers, and databases.</span>
				<span>Well-organized person, problem solver, independent employee with high attention to detail. Huge fan of carom billiards, outdoor activities, Netflix series and traveling.</span>
				<span>Passionate about the entire front-end &amp; back-end spectrum and going to work on ambitious projects with positive mindset.</span>
				<p onClick={() => navigate('/contact')}>Let's make something special.</p>
			</div>
			<div className='canvas_zone' />
		</div>
	);
};

export default Component;