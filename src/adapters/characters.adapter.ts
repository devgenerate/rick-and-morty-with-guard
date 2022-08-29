// @services
import { CharactersResponse } from "@/services";

// @models
import { Character } from "@/models";


export function charactersAdapter(charactersResponse: CharactersResponse): Character[] {
  return charactersResponse.results.map(character => ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    image: character.image,
    url: character.url
  }))
}