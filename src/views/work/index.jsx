import { useState } from 'react';

import WorkDetail from '../../components/workdetail';

import Coaxer from '../../assets/images/coaxer.png';
import Hypertube from '../../assets/images/hypertube.png';
import Foodie from '../../assets/images/foodie.png';
import Musical from '../../assets/images/musical.png';
import Matcha from '../../assets/images/matcha.png';
import FastingTimer from '../../assets/images/fastingtimer.png';
import OnlineShop from '../../assets/images/onlineshop.png';
import Insta from '../../assets/images/instademo.png';
import TriviaGame from '../../assets/images/triviagame.png';
import Todo from '../../assets/images/todo.png';
import Weather from '../../assets/images/weather.png';

import './index.css';

const Component = () => {

	const [show, setShow] = useState(false);
	const [image, setImage] = useState();
	const [uri, setUri] = useState('');

	const _detailModal = (img, uri) => {
		setShow(!show);
		setImage(img);
		setUri(uri);
	};

	return (
		<>
			<div className='work_container'>
				<div className='text_zone'>
					<h2>
						<span>M</span>
						<span>y</span>
						<span>&nbsp;</span>
						<span>P</span>
						<span>o</span>
						<span>r</span>
						<span>t</span>
						<span>f</span>
						<span>o</span>
						<span>l</span>
						<span>i</span>
						<span>o</span>
					</h2>
					<span>A small gallery of recent projects that I've built. Interested to see some more? Visit my <span className='span_link' onClick={() => window.open('https://github.com/dyobi', '_blank')}>Github</span> page.</span>
				</div>
				<div className='grid_zone'>
					<div onClick={() => _detailModal(Coaxer, 'web_coaxer')}>
						Coaxer
					</div>
					<div onClick={() => _detailModal(Hypertube, 'web_hypertube')}>
						Hypertube
					</div>
					<div onClick={() => _detailModal(Foodie, 'web_foodie')}>
						Foodie
					</div>
					<div onClick={() => _detailModal(Musical, 'web_musical')}>
						Musical
					</div>
					<div onClick={() => _detailModal(Matcha, 'web_matcha')}>
						Matcha
					</div>
					<div onClick={() => _detailModal(Coaxer, 'web_camagru')}>
						Camagru
					</div>
					<div onClick={() => _detailModal(FastingTimer, 'app_swift_fastingtimer')}>
						Fasting Timer
					</div>
					<div onClick={() => _detailModal(OnlineShop, 'app_swift_onlineshop')}>
						Online Shop
					</div>
					<div onClick={() => _detailModal(Insta, 'app_swift_instagram')}>
						Instagram Demo
					</div>
					<div onClick={() => _detailModal(TriviaGame, 'app_swift_triviagame')}>
						Trivia Game
					</div>
					<div onClick={() => _detailModal(Todo, 'app_swift_todo')}>
						Simple Todo
					</div>
					<div onClick={() => _detailModal(Weather, 'app_swift_weather')}>
						Weather
					</div>
				</div>
			</div>
			<WorkDetail show={show} close={() => setShow(!show)} img={image} uri={uri} />
		</>
	);
};

export default Component;