import './index.css';

const Component = ({ onClick }) => {
	return (
		<div className='menu_button_container' onClick={(e) => onClick(e)}>
			<div className='menu_button'>
				<span />
				<span />
				<span />
			</div>
		</div>
	);
};

export default Component;