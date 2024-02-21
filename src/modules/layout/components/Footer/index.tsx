import ScreenBlock from '@modules/common/components/ScreenBlock';

import { APP_AUTHOR_SIGNATURE, APP_AUTHOR_WEBSITE } from '@utils/const';
import { messages } from '@utils/messages';

import s from './Footer.module.scss';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<ScreenBlock
			className={s.container}
			subClassName={s.inner}
			element="footer"
			isFullScreen
			frameClassName={s.frame}
		>
			<p>
				{currentYear}/{messages.ALL_RIGHTS_RESERVED}
			</p>
			<p>
				{messages.WEBSITE_CREATED_BY}{' '}
				<a target="_blank" rel="noreferrer" href={APP_AUTHOR_WEBSITE}>
					{APP_AUTHOR_SIGNATURE}
				</a>
			</p>
		</ScreenBlock>
	);
};

export default Footer;
