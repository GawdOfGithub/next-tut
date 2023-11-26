import React from 'react'
import Link from 'next/link'
type Props = {}

function pokedex({}: Props) {
  return (
    <>
    <div>pokedex</div>
    <Link href="/pokedex/pikachu">pikachu</Link>
    <Link href="/pokedex/bulbasaur">bulbasaur</Link>
    <Link href="/pokedex/charmender">charmender</Link>
    </>
  )
}

export default pokedex