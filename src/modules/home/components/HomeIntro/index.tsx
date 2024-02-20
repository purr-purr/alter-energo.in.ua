import { FC } from 'react';

import Card from '@modules/common/components/Card';
import ScreenBlock from '@modules/common/components/ScreenBlock';
import cn from 'classnames';

import { powerInfo } from '@utils/data';
import { messages } from '@utils/messages';

import s from './HomeIntro.module.scss';

const HomeIntro: FC = () => {
	const introPowerInfo = [
		{
			value: powerInfo.totalCapacity,
			unit: 'МВт',
			description: messages.TOTAL_CAPACITY,
		},
		{
			value: powerInfo.greenTariff,
			unit: '¢',
			description: messages.GREEN_TARIFF,
		},
	];

	return (
		<ScreenBlock className={s.container} isLargeSize>
			<div className={s.cards}>
				<Card className={s.heading} type="div">
					<h2>
						{messages.SOLAR_ENERGY_FOR}
						<span>{messages.PROGRESSIVE_FUTURE}</span>
					</h2>
				</Card>
				<ul className={s.powerInfo}>
					{introPowerInfo.map((item) => (
						<Card key={item.value}>
							<h2>{item.value + ' ' + item.unit}</h2>
							<p>{item.description}</p>
						</Card>
					))}
				</ul>
			</div>
		</ScreenBlock>
	);
};

export default HomeIntro;
