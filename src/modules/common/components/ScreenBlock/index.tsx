import { createElement, FC, type ReactNode } from 'react';

import cn from 'classnames';

import s from './ScreenBlock.module.scss';

const ScreenBlock: FC<{
	children: ReactNode;
	className?: string;
	frameClassName?: string;
	element?: 'nav' | 'section' | 'footer';
	isFullScreen?: boolean;
	id?: string;
}> = ({
	children,
	className,
	element = 'section',
	frameClassName,
	isFullScreen = false,
	id,
}) => {
	const subElement = createElement(
		'article',
		{
			className: cn(s.inner, className),
		},
		children,
	);

	return createElement(
		element,
		{
			className: cn(
				s.container,
				frameClassName,
				isFullScreen ? s[`container--large`] : className,
			),
			id: id,
		},
		isFullScreen ? subElement : children,
	);
};

export default ScreenBlock;
