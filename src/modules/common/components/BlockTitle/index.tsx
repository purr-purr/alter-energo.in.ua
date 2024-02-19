import { FC } from 'react';

import cn from 'classnames';

import s from './BlockTitle.module.scss';

const BlockTitle: FC<{
	title: string;
	className?: string;
}> = ({ title, className }) => {
	return <h3 className={cn(s.container, className && className)}>{title}</h3>;
};

export default BlockTitle;
