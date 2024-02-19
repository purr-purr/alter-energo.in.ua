import { FC } from 'react';
import Image from 'next/image';

import BlockTitle from '@modules/common/components/BlockTitle';
import Card from '@modules/common/components/Card';
import ScreenBlock from '@modules/common/components/ScreenBlock';

import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_MAP_LINK,
	COMPANY_PHONE,
} from '@utils/const';
import { messages } from '@utils/messages';

import EMAIL_ICON from '@public/assets/email-icon.svg';
import MAP_ICON from '@public/assets/map-icon.svg';
import PHONE_ICON from '@public/assets/phone-icon.svg';

import s from './HomeContacts.module.scss';

const HomeAboutUs: FC = () => {
	return (
		<ScreenBlock className={s.container} id="contacts" isLargeSize>
			<BlockTitle
				className={s.title}
				title={messages.ALWAYS_IN_TOUCH_WITH_GREEN_ENERGY}
			/>

			<div className={s.info}>
				<ul className={s.list}>
					<li>
						<a
							className={s.icon}
							target="_blank"
							rel="noreferrer"
							href={`mailto:${COMPANY_EMAIL}`}
						>
							<Image src={EMAIL_ICON} alt={COMPANY_EMAIL} />
							{COMPANY_EMAIL}
						</a>
					</li>

					<li>
						<a className={s.icon} href={`tel:${COMPANY_PHONE}`}>
							<Image src={PHONE_ICON} alt={COMPANY_PHONE} />
							{COMPANY_PHONE}
						</a>
					</li>

					<li className={s.icon}>
						<Image src={MAP_ICON} alt={COMPANY_ADDRESS} />
						{COMPANY_ADDRESS}
					</li>
				</ul>

				<Card className={s.map} type="div">
					<iframe
						className={s[`map-frame`]}
						src={COMPANY_MAP_LINK}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</Card>
			</div>
		</ScreenBlock>
	);
};

export default HomeAboutUs;
