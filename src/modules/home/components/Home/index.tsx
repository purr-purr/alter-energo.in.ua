import HomeAboutUs from '@modules/home/components/HomeAboutUs';
import HomeContacts from '@modules/home/components/HomeContacts';
import HomeIntro from '@modules/home/components/HomeIntro';

const Home = () => {
	return (
		<>
			<HomeIntro />
			<HomeAboutUs />
			<HomeContacts />
		</>
	);
};

export default Home;
