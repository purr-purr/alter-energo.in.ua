import { FC } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import ScreenBlock from '@modules/common/components/ScreenBlock';

import { COMPANY_FULL_NAME } from '@utils/const';
import { messages } from '@utils/messages';

import s from './HomeAboutUs.module.scss';

const HomeAboutUs: FC = () => {
	const infoAboutUs = [
		messages.OUR_SOLAR_POWER_PLANTS,
		messages.OUR_POWER_PLANTS_USE,
	];

	const blockTitle =
		COMPANY_FULL_NAME.toUpperCase() + ' - ' + messages.PIONEERS_IN_THE_FIELD_OF;

	return (
		<ScreenBlock className={s.container}>
			<BlockTitle className={s.title} title={blockTitle} />

			<ul className={s.list}>
				{infoAboutUs.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</ScreenBlock>
	);
};

export default HomeAboutUs;
