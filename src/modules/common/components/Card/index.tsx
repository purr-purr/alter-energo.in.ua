import { createElement, FC } from 'react';

import type { ICardProps } from '@modules/common/components/Card/interface';
import cn from 'classnames';

import s from './Card.module.scss';

const Card: FC<ICardProps> = ({ children, className, type = 'li' }) => {
	const classNameList = cn(s.container, className);

	return createElement(
		type,
		{
			className: classNameList,
		},
		children,
	);
};

export default Card;
