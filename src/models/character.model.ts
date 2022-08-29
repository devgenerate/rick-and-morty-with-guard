export interface CharacterInfo {
	count: number;
	pages: number;
	next: string;
	prev: string;
}

export interface CharacterDescription {
    name: string;
    url: string;
}

export interface CharacterItemResult {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: CharacterDescription;
	location: CharacterDescription;
	image: string;
	episode: string[];
	url: string;
	created: string;
}


export interface CharacterResponse {
    info: CharacterInfo
    result: CharacterItemResult[]
}

export interface Character {
	id: number;
	name: string;
	status: string;
	type: string;
	image: string;
	url: string;
}
