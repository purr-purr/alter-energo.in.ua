import { createElement, FC } from 'react';

import type { IScreenBlockProps } from '@modules/common/components/ScreenBlock/interface';
import cn from 'classnames';

import s from './ScreenBlock.module.scss';

const ScreenBlock: FC<IScreenBlockProps> = ({
	children,
	className,
	element = 'section',
	subElement = 'article',
	frameClassName,
	subClassName,
	isFullScreen = false,
	id,
}) => {
	const innerElement = createElement(
		subElement,
		{
			className: cn(s.inner, subClassName),
		},
		children,
	);

	return createElement(
		element,
		{
			className: cn(
				!isFullScreen && s.containerSize,
				s.container,
				className,
				frameClassName,
			),
			id: id,
		},
		isFullScreen ? innerElement : children,
	);
};

export default ScreenBlock;
