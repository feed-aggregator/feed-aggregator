export type fetchFromHN = () => Promise<number[]>
export interface HNPost {
	id: number;
	deleted?: boolean;
	type: string;
	by: string;
	time: number;
	text: string;
	dead: boolean;
	parent: string;
	poll?: any;
	kids: number[];
	url: string;
	score: number;
	title: string;
	parts: string[];
	descendants: number;
}
