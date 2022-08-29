export const BASE_URL = 'https://rickandmortyapi.com/api/'
export const CHARACTERS_URL = `${BASE_URL}/character`

interface Description {
    name: string;
    url: string;
}

export interface CharacterResponse {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Description;
    location: Description;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface CharactersResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: number | null;
}

export interface CharactersResponse {
  info: CharactersResponseInfo,
  results: CharacterResponse[]
}

export function getCharacters(): Promise<CharactersResponse> {
  return fetch(CHARACTERS_URL).then(response => response.json())
}
