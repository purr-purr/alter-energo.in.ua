import { messages } from '@utils/messages';
import type { IAppNavigation } from '@utils/types';

export const appNavigation: IAppNavigation[] = [
	{ title: messages.DOCUMENTATION, path: '/#documentation' },
	{ title: messages.CONTACTS, path: '/#contacts' },
];

export const powerInfo = {
	greenTariff: 11.45,
	totalCapacity: 10.97,
};

export const powerPlants = {
	kvvp: 4,
	insolation: 1341,
	insolationTotal: 4000,
};
