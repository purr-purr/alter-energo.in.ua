import { FC } from 'react';

import type { IBlockTitleProps } from '@modules/common/components/BlockTitle/interface';
import cn from 'classnames';

import s from './BlockTitle.module.scss';

const BlockTitle: FC<IBlockTitleProps> = ({ title, className }) => {
	return <h3 className={cn(s.container, className)}>{title}</h3>;
};

export default BlockTitle;
