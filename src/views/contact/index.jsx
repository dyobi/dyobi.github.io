import './index.css';

const Component = () => {
	return (
		<div className='contact_container'>
			<div className='text_zone'>
				<h2>
					<span>G</span>
					<span>e</span>
					<span>t</span>
					<span>&nbsp;</span>
					<span>I</span>
					<span>n</span>
					<span>&nbsp;</span>
					<span>T</span>
					<span>o</span>
					<span>u</span>
					<span>c</span>
					<span>h</span>
				</h2>
				<span>I'm currently looking for any opportunities, my inbox is always open. Whether you have a question or just want to say hi, don't hesitate to contact me! I’ll try my best to get back to you.</span>
				<div className='contact_form'>
					<input type='text' name='name' />
					<input type='email' name='email' />
					<textarea name='content' />
					<div className='contact_button'>
						<span>Contact me</span>
					</div>
				</div>
			</div>
			<div className='location_zone'>
				<div className='location_info'>
					<span>
						Luke Kim,
						<br />
						San Jose, California
						<br />
					</span>
					<span className='email'>Dyobi.92@gmail.com</span>
				</div>
			</div>
		</div>
	);
};

export default Component;