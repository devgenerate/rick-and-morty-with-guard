// @vendors
import { useEffect, useState } from 'react'

// @services
import { getCharacters } from '@/services'

// @adapters
import { Character } from '@/models'
import { charactersAdapter } from '@/adapters'

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  const loadCharacters = async () => {
    const charactersResponse = await getCharacters()
    setCharacters(charactersAdapter(charactersResponse))
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  return (
    <div>
      {characters.map((character) => (
        <article key={`character-${character.id}`}>
          {character.name}
        </article>
      ))}
    </div>
  )
}
