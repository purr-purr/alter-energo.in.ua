import { FC } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import Card from '@modules/common/components/Card';
import ScreenBlock from '@modules/common/components/ScreenBlock';
import type { ITechInfo } from '@modules/home/components/HomeTechInfo/interface';
import CircularProgress from '@mui/joy/CircularProgress';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';
import { powerPlants } from '@utils/data';
import { messages } from '@utils/messages';

import s from './HomeTechInfo.module.scss';

const HomeTechInfo: FC = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const getInsolationPercentage = (total: number, current: number) => {
		return (total / current) * 10;
	};

	const widgetThickness = isMobile ? 8 : 11;
	const widgetSize = isMobile ? 160 : 222;

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
		<ScreenBlock
			isFullScreen
			className={s.container}
			frameClassName={s.frame}
			subClassName={s.inner}
		>
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
								'--CircularProgress-size': `${widgetSize}px`,
								'--CircularProgress-trackThickness': `${widgetThickness}px`,
								'--CircularProgress-progressThickness': `${widgetThickness}px`,
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
