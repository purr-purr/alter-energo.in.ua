import type {IAppNavigation} from '@utils/types';
import {messages} from "@utils/messages";

export const appNavigation: IAppNavigation[] = [
	{title: messages.DOCUMENTATION, path: '/#documentation'},
	{title: messages.CONTACTS, path: '/#contacts'},
];

export const powerInfo = {
	GREEN_TARIFF: 11.45,
	TOTAL_CAPACITY: 10.97,
}