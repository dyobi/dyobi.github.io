import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import $ from 'jquery';

import Button from '../button';

import './index.css';

const Component = () => {

	const _checkBlank = (e, name) => {
		e.preventDefault();

		let valid = true;

		const _blank = /^\s+|\s+$/g;
		const _email = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

		if (name === 'name') {
			if (document.getElementsByName('name')[0].value.replace(_blank, '') === '') {
				$(`input[name=${name}]`).css('animation', 'input_invalid 600ms');
				$(`input[name=${name}]`).css('box-shadow', 'inset 0 -1.6px 0 #FF2400');
				valid = false;
			} else {
				$(`input[name=${name}]`).css('animation', 'input_valid 600ms');
				$(`input[name=${name}]`).css('box-shadow', 'inset 0 -1.6px 0 #A4DE02');
			}
		} else if (name === 'email') {
			if (!_email.test(document.getElementsByName('email')[0].value)) {
				$(`input[name=${name}]`).css('animation', 'input_invalid 600ms');
				$(`input[name=${name}]`).css('box-shadow', 'inset 0 -1.6px 0 #FF2400');
				valid = false;
			} else {
				$(`input[name=${name}]`).css('animation', 'input_valid 600ms');
				$(`input[name=${name}]`).css('box-shadow', 'inset 0 -1.6px 0 #A4DE02');
			}
		} else if (name === 'content') {
			if (document.getElementsByName('content')[0].value.replace(_blank, '') === '') {
				$(`textarea[name=${name}]`).css('animation', 'input_invalid 600ms');
				$(`textarea[name=${name}]`).css('box-shadow', 'inset 0 -1.6px 0 #FF2400');
				valid = false;
			} else {
				$(`textarea[name=${name}]`).css('animation', 'input_valid 600ms');
				$(`textarea[name=${name}]`).css('box-shadow', 'inset 0 -1.6px 0 #A4DE02');
			}
		}

		return valid;
	};

	const _handleSubmit = (e) => {
		e.preventDefault();

		if (_checkBlank(e, 'name') && _checkBlank(e, 'email') && _checkBlank(e, 'content')) {
			emailjs.send('service_1w98fif', 'template_vphzk0q', {
				name: document.getElementsByName('name')[0].value,
				email: document.getElementsByName('email')[0].value,
				message: document.getElementsByName('content')[0].value
			})
				.then(res => {
					if (res.status === 200) {
						document.getElementsByName('name')[0].value = '';
						document.getElementsByName('email')[0].value = '';
						document.getElementsByName('content')[0].value = '';

						$('input[name=name]').css('box-shadow', 'inset 0 0 0');
						$('input[name=email]').css('box-shadow', 'inset 0 0 0');
						$('textarea[name=content]').css('box-shadow', 'inset 0 0 0');
						alert('Success');
					} else {
						alert('Something went wrong.');
					}
				});
		}

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
					onBlur={(e) => _checkBlank(e, 'name')}
				/>
				<input
					className='contact_input'
					type='email'
					name='email'
					placeholder='Email'
					onBlur={(e) => _checkBlank(e, 'email')}
				/>
			</div>
			<textarea
				className='contact_content'
				name='content'
				placeholder='Message'
				onBlur={(e) => _checkBlank(e, 'content')}
			/>
			<div className='send_button'>
				<Button title='Send message!' onClick={(e) => _handleSubmit(e)} />
			</div>
		</div>
	);
};

export default Component;