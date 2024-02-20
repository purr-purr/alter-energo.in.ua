export interface IAppNavigation {
	title: string;
	path?: string;
	group?: {
		[key: string]: string;
	}[];
}
