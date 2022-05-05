import ScrollView from '../../components/scroll';
import MainInfo from '../../components/mainInfo';
import About from '../about';
import Skills from '../skills';
import Work from '../work';
import Contact from '../contact';

const Component = () => {
	return (
		<>
			<ScrollView />
			<MainInfo />
			<About />
			<Skills />
			<Work />
			<Contact />
		</>
	);
};

export default Component;