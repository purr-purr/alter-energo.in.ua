import { createElement, FC, type ReactNode } from 'react';

import cn from 'classnames';

import s from './ScreenBlock.module.scss';

const ScreenBlock: FC<{
	children: ReactNode;
	className?: string;
	element?: 'nav' | 'article' | 'footer';
	isLargeSize?: boolean;
	id?: string;
}> = ({
	children,
	className,
	element = 'article',
	isLargeSize = false,
	id,
}) => {
	const classNameList = cn(
		s.container,
		className && className,
		isLargeSize && s[`container--large`],
	);

	return createElement(
		element,
		{
			className: classNameList,
			id: id,
		},
		children,
	);
};

export default ScreenBlock;
