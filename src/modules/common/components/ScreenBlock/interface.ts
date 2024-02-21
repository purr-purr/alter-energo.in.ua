import type { ReactNode } from 'react';

export interface IScreenBlockProps {
	children: ReactNode;
	className?: string;
	frameClassName?: string;
	subClassName?: string;
	element?: 'header' | 'section' | 'footer';
	subElement?: 'nav' | 'article';
	isFullScreen?: boolean;
	id?: string;
}
