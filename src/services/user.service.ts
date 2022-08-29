const baseUrl = 'https://rickandmortyapi.com/api/'
const characterUrl = `${baseUrl}/character`

interface Description {
    name: string;
    url: string;
}

export interface LoadUserResponse {
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

export async function loadUser(): Promise<LoadUserResponse> {
    return fetch(`${characterUrl}/1`).then(data => data.json())
}