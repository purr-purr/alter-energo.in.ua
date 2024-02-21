import { FC } from 'react';

import type { IAccordionProps } from '@modules/common/components/Accordion/interface';

import s from './Accordion.module.scss';

const Accordion: FC<IAccordionProps> = ({ children, title, order }) => {
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
