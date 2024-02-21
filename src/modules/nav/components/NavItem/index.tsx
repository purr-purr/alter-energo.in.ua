import { FC, useContext } from 'react';
import Link from 'next/link';

import { HeaderContext } from '@modules/layout/context/HeaderContext';
import type { INavItemProps } from '@modules/nav/components/NavItem/interface';

import s from './NavItem.module.scss';

const NavItem: FC<INavItemProps> = ({ title, path, onClick }) => {
	const { handleMobileNavMode } = useContext(HeaderContext);

	const handleLinkClick = () => {
		onClick();
		handleMobileNavMode(false);
	};

	return (
		<li>
			<Link className={s.container} onClick={handleLinkClick} href={path}>
				{title}
			</Link>
		</li>
	);
};

export default NavItem;
