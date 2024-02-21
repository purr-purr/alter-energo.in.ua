import {
	createContext,
	FC,
	useCallback,
	useState,
	type ReactNode,
} from 'react';

import type { IHeaderContext } from '@modules/layout/context/HeaderContext/interface';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';

const HeaderContext = createContext<IHeaderContext>({
	isMobileNavMode: false,
	handleMobileNavMode: () => {},
});

const HeaderContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const [isMobileNavMode, setIsMobileNavMode] = useState<boolean>(false);

	const handleMobileNavMode = useCallback((value: boolean) => {
		setIsMobileNavMode(value);
	}, []);

	const headerContext: IHeaderContext = {
		isMobileNavMode,
		handleMobileNavMode,
	};

	if (!isMobile) {
		return <>{children}</>;
	}

	return (
		<HeaderContext.Provider value={headerContext}>
			{children}
		</HeaderContext.Provider>
	);
};

export { HeaderContextWrapper, HeaderContext };
