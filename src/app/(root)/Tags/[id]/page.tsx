import { getAllQuestionsByTags } from '@/lib/actions/tag.action'
import React from 'react'

type Props = {
  params:{
    id:string
  }
}

const Page = async ({params}:Props) => {
  try
  {
    const {id} = params
    const result = getAllQuestionsByTags(id)
    console.log(id);
    console.log(result)

  return (
    <div>Page</div>
  )
  }
  catch(error)
  {
    console.log(error);
  }
}

export default Page