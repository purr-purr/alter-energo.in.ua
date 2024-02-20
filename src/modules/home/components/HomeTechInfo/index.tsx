import { FC } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import Card from '@modules/common/components/Card';
import ScreenBlock from '@modules/common/components/ScreenBlock';
import CircularProgress from '@mui/joy/CircularProgress';

import { powerPlants } from '@utils/data';
import { messages } from '@utils/messages';

import s from './HomeTechInfo.module.scss';

interface ITechInfo {
	title: string;
	description: string;
	value: number;
	valuePercent: number;
	symbol?: string;
}

const HomeTechInfo: FC = () => {
	const getInsolationPercentage = (total: number, current: number) => {
		return (total / current) * 10;
	};

	const techInfo: ITechInfo[] = [
		{
			title: messages.KVVP,
			description: messages.INSTALLED_CAPACITY_UTILIZATION_RATE,
			value: powerPlants.kvvp,
			valuePercent: powerPlants.kvvp,
			symbol: '%',
		},
		{
			title: messages.INSOLATION,
			description: messages.AVERAGE_ANNUAL_AMOUNT_OF_GLOBAL_EXPOSURE,
			value: powerPlants.insolation,
			valuePercent: getInsolationPercentage(
				powerPlants.insolationTotal,
				powerPlants.insolation,
			),
		},
	];

	return (
		<ScreenBlock isFullScreen className={s.container} frameClassName={s.frame}>
			<div className={s.info}>
				<BlockTitle className={s.title} title={messages.LAUNCHED_IN_2020} />
				<ul className={s[`info-list`]}>
					{techInfo.map((item) => (
						<li key={item.title} className={s[`info-item`]}>
							<span>{item.title}</span> - {item.description}
						</li>
					))}
				</ul>
			</div>

			<ul className={s.progressList}>
				{techInfo.map((item) => (
					<Card key={item.title} className={s[`progressList-item`]}>
						<CircularProgress
							sx={{
								'--CircularProgress-size': '222px',
								'--CircularProgress-trackThickness': '11px',
								'--CircularProgress-progressThickness': '11px',
							}}
							determinate
							variant="soft"
							value={item.valuePercent}
							className={s[`progressList-circle`]}
						>
							{item.value}
							{item.symbol && item.symbol}
						</CircularProgress>

						<p className={s[`progressList-title`]}>{item.title}</p>
					</Card>
				))}
			</ul>
		</ScreenBlock>
	);
};

export default HomeTechInfo;
