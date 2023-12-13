import { getAllQuestionsByTags } from '@/lib/actions/tag.action'
import Answer from '@/app/(root)/components/shared/Answer'
import React from 'react'
import {auth} from '@clerk/nextjs'

type Props = {

  params:{
    id:string
  }
}

const Page = async ({params}:Props) => {
const {userId} = auth()
  try
  {
    const {id} = params
    const result = getAllQuestionsByTags(id)
    console.log(id);
    console.log(result)

  return (
    <>
    <div>Page</div>
    <Answer id={id} userId={userId}/>
    </>
  )
  }
  catch(error)
  {
    console.log(error);
  }
}

export default Page