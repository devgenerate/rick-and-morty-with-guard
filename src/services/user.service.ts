import { CHARACTERS_URL, CharacterResponse }  from '@/services'

export async function loadUser(): Promise<CharacterResponse> {
    return fetch(`${CHARACTERS_URL}/1`).then(data => data.json())
}