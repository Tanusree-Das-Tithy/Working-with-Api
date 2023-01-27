/** @format */

export interface Data {
	info: object;

	results: [Object];
}

export interface info<T> extends Data {
	count: number;
	pages: number;
	next: string;
	prev: string;
	rows: T[];
}
