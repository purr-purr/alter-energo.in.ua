import { createElement, FC, type ReactNode } from 'react';

import cn from 'classnames';

import s from './Card.module.scss';

const Card: FC<{
	children: ReactNode;
	className?: string;
	type?: 'div' | 'li';
}> = ({ children, className, type = 'li' }) => {
	const classNameList = cn(s.container, className && className);

	return createElement(
		type,
		{
			className: classNameList,
		},
		children,
	);
};

export default Card;
