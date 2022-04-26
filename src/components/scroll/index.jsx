import { GiSpiralArrow } from 'react-icons/gi';

import './index.css';

const Component = () => {
	return (
		<div>
			<div className='scroll_down left'>
				<span>scroll down</span>
				<GiSpiralArrow className='scroll_icon' />
			</div>
			<div className='scroll_down right'>
				<span>scroll down</span>
				<GiSpiralArrow className='scroll_icon' />
			</div>
		</div>
	);
};

export default Component;