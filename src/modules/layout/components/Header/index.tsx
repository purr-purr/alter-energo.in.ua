import Logo from '@modules/common/components/Logo';
import ScreenBlock from '@modules/common/components/ScreenBlock';
import { HeaderContextWrapper } from '@modules/layout/context/HeaderContext';
import Nav from '@modules/nav/components/Nav';
import NavButton from '@modules/nav/components/NavBurgerButton';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';

import s from './Header.module.scss';

const Header = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	return (
		<header className={s.container}>
			<ScreenBlock element="nav" className={s.inner}>
				<Logo />
				<HeaderContextWrapper>
					<Nav />
					{isMobile && <NavButton />}
				</HeaderContextWrapper>
			</ScreenBlock>
		</header>
	);
};

export default Header;
