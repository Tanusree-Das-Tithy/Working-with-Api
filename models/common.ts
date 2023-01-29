/** @format */

export interface Info {
	count: number;
	pages: number;
	next: string;
	prev: string;
}

export interface Data<T> {
	info: Info;
	results: T[];
}
