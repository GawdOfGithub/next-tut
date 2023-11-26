import React from 'react'

type Props = {}

function page({params}:any) {
  return (
    <div>{params.name}</div>
  )
}

export default page