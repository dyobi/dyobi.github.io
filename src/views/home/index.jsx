import ScrollView from '../../components/scroll';

import './index.css';

const Component = () => {
	return (
		<div className='home_container'>
			<ScrollView />
			<div className='section_home'>
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
					<p>Full Stack Developer</p>
					<div className='contact_form'>Contact me</div>
				</div>
				<div className='profile_zone'></div>
			</div>
		</div>
	);
};

export default Component;