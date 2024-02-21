import type { ReactNode } from 'react';

export interface ICardProps {
	children: ReactNode;
	className?: string;
	type?: 'div' | 'li';
}
