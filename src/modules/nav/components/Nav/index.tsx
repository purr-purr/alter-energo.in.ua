import { useContext, useEffect, useState } from 'react';

import { HeaderContext } from '@modules/layout/context/HeaderContext';
import NavItem from '@modules/nav/components/NavItem';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';
import { appNavigation } from '@utils/data';
import type { IAppNavigation } from '@utils/types';

import s from './Nav.module.scss';

const Nav = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const { isMobileNavMode, handleMobileNavMode } = useContext(HeaderContext);

	const [openDropdownIndex, setOpenDropdownIndex] = useState<number | boolean>(
		false,
	);

	useEffect(() => {
		const element = document.querySelector('html');
		if (!isMobile) {
			handleMobileNavMode(false);
		}
		if (element) {
			element.setAttribute(
				'style',
				`${isMobileNavMode ? `overflow:hidden;` : ``}`,
			);
		}
	}, [isMobileNavMode, isMobile]);

	const toggleDropdown = (index: number) => {
		setOpenDropdownIndex(openDropdownIndex === index ? false : index);
	};

	return (
		<ul className={cn(s.container, isMobileNavMode && s.active)}>
			{appNavigation.map((item: IAppNavigation, index) =>
				item.path && (
					<NavItem
						onClick={() => toggleDropdown(index)}
						key={item.title}
						title={item.title}
						path={item.path}
					/>
				),
			)}
		</ul>
	);
};

export default Nav;
