import { FC } from 'react';

import Accordion from '@modules/common/components/Accordion';
import ScreenBlock from '@modules/common/components/ScreenBlock';

import { COMPANY_FULL_NAME, COMPANY_NAME } from '@utils/const';
import { messages } from '@utils/messages';

import s from './HomeCompanyInfo.module.scss';

const HomeCompanyInfo: FC = () => {
	const companyShotNameUpperCase =
		`${COMPANY_NAME[0]}-${COMPANY_NAME[1]}`.toUpperCase();
	const companyFullNameUpperCase = COMPANY_FULL_NAME.toUpperCase();
	return (
		<ScreenBlock className={s.container} id="documentation">
			<Accordion order={1} title={messages.INFORMATION_ABOUT_THE_COMPANY}>
				<p>
					<b>Повна назва компанії:</b> ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ{' '}
					{companyShotNameUpperCase}
				</p>
				<p>
					<b>Код ЕГРПОУ:</b> 43234398
				</p>
				<p>
					<b>Дата реєстрації:</b> 2019-09-17
				</p>
				<p>
					<b>Дата ліцензії:</b> 2020-06-10
				</p>
				<p>
					<b>Уповноважена особа:</b> Сухина Ярослав Ігорович
				</p>
				<p>
					<b>Власники компанії:</b> Сухина Ярослав Ігорович
				</p>
				<p>
					Компанія {`${companyFullNameUpperCase}`} є учасником українського ринку
					відновлюваної енергетики з 2020 року в ролі незалежного виробника
					електроенергії з відновлюваних джерел енергії (ВДЕ). Під управлінням
					компанії 2 сонячні електростанції (наземні) в Київській області, сукупною
					потужністю 11.45 МВт, введені в експлуатацію в 2020 році.
				</p>
				<p>
					Елетроенергію, вироблену компанією {`${companyFullNameUpperCase}`}{' '}
					викуповує Гарантований покупець за зеленим тарифом.
				</p>
			</Accordion>
			<Accordion order={2} title={messages.INFORMATION_ABOUT_ENERGY_SOURCES}>
				<h5 className={s.primaryColor}>СЕС Вабля-1</h5>
				<p>
					Наземна сонячна електростанція СЕС Вабля-1 розміщена в північній частині
					України - Бородянський район, Київська область, Україна. Електростанція
					введена в експлуатацію у 2020 році із встановленною потужністю - 5.73 МВт.
					Компанія отримала ліцензію на виробництво електроенергії 10.06.2020 та
					здобула Зелений тариф 10.97 євроцентів у гривневому еквіваленті починаючи з
					23.09.2020.
				</p>

				<h5 className={s.primaryColor}>СЕС Вабля-2</h5>
				<p>
					Наземна сонячна електростанція СЕС Вабля-2 розміщена в північній частині
					України - Бородянський район, Київська область, Україна. Електростанція
					введена в експлуатацію у 2020 році із встановленною потужністю - 5.73 МВт.
					Компанія отримала ліцензію на виробництво електроенергії 10.06.2020 та
					здобула Зелений тариф 10.97 євроцентів у гривневому еквіваленті починаючи з
					23.09.2020.
				</p>
			</Accordion>
		</ScreenBlock>
	);
};

export default HomeCompanyInfo;
