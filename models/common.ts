/** @format */

export interface Data {
	info: object;

	results: [object];
}

export interface Info<T> extends Data {
	count: number;
	pages: number;
	next: string;
	prev: string;
	rows: T[];
}
