import { BiXCircle } from 'react-icons/bi';

import './index.css';

const Component = ({ show, close, img, uri }) => {
	return (
		<div className={`detail_container ${show ? 'show' : ''}`} onClick={() => close()}>
			<div className='modal' onClick={(e) => e.stopPropagation()}>
				<img src={img} alt='' />
				<div className='bottom_section'>
					<span onClick={() => window.open(`https://github.com/dyobi/${uri}`, '_blank')}>Get more info!</span>
					<BiXCircle className='close_btn' onClick={() => close()} />
				</div>
			</div>
		</div>
	);
};

export default Component;