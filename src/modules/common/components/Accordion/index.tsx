import { FC, ReactNode } from 'react';

import s from './Accordion.module.scss';

const Accordion: FC<{
	children: ReactNode;
	title: string;
	order: number;
}> = ({ children, title, order }) => {
	return (
		<details className={s.container}>
			<summary className={s.summary} data-order={`0${order}`}>
				<h4 className={s.title}>{title}</h4>
			</summary>
			<div className={s.content}>{children}</div>
		</details>
	);
};

export default Accordion;
