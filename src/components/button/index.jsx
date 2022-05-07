import './index.css';

const Component = ({ title, onClick }) => {
	return (
		<div className='contact_button' onClick={(e) => onClick(e)}>
			<span>{title}</span>
		</div>
	);
};

export default Component;