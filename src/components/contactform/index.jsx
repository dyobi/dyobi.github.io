import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

import Button from '../button';

import './index.css';

const Component = () => {

	const _handleSubmit = (e) => {
		e.preventDefault();

		alert('Something went wrong.');

		// const params = {
		// 	name: document.getElementsByName('name')[0].value,
		// 	email: document.getElementsByName('email')[0].value,
		// 	message: document.getElementsByName('content')[0].value
		// };

		// emailjs.send('service_1w98fif', 'template_vphzk0q', params)
		// 	.then(res => {
		// 		if (res.status === 200) {
		// 			document.getElementsByName('name')[0].value = '';
		// 			document.getElementsByName('email')[0].value = '';
		// 			document.getElementsByName('content')[0].value = '';
		// 		} else {
		// 			alert('Something went wrong.');
		// 		}
		// 	});

	};

	useEffect(() => {
		emailjs.init('IPXHfo2-givgJSoRW');
	}, []);

	return (
		<div className='contact_form'>
			<div className='contact_info'>
				<input
					className='contact_input'
					type='text'
					name='name'
					placeholder='Name'
				/>
				<input
					className='contact_input'
					type='email'
					name='email'
					placeholder='Email'
				/>
			</div>
			<textarea
				className='contact_content'
				name='content'
				placeholder='Message'
			/>
			<div className='send_button'>
				<Button title='Send message!' onClick={(e) => _handleSubmit(e)} />
			</div>
		</div>
	);
};

export default Component;