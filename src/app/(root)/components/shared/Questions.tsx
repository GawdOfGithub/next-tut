import React from 'react'
import { tempQuestionData } from '@/constants'
import { Button } from '@/components/ui/button'
import QuestionCard from '@/components/ui/QuestionCard'
type Props = {}

function Questions({}: Props) {
  return (
   <>
   {
   tempQuestionData.map((item,index)=>(
   <div key={item._id}>
  <QuestionCard _id={item._id} title={item.title} downvotes={item.downvotes} upvotes={item.upvotes} tags={item.tags} author={item.author} views={item.views} />
   </div>
   ))
}
   </>
  )
  
}


export default Questions