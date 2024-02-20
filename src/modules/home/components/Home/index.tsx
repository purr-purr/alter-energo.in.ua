import HomeAboutUs from '@modules/home/components/HomeAboutUs';
import HomeCompanyInfo from '@modules/home/components/HomeCompanyInfo';
import HomeContacts from '@modules/home/components/HomeContacts';
import HomeIntro from '@modules/home/components/HomeIntro';
import HomeTechInfo from '@modules/home/components/HomeTechInfo';

const Home = () => {
	return (
		<>
			<HomeIntro />
			<HomeAboutUs />
			<HomeTechInfo />
			<HomeCompanyInfo />
			<HomeContacts />
		</>
	);
};

export default Home;
