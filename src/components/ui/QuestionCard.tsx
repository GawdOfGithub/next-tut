import React from 'react'
import { Badge } from './badge'
type Props = {

    _id:number,
    title:string,
    downvotes:number
    tags:{
        _id:number,
        name:string
    }[],
    author:{
        _id:number,
        name:string,
        picture:string
    }[],
    upvotes:number,
    views:number


}

const QuestionCard = ({_id,author,downvotes,title,tags,upvotes}: Props) => {
  return (
  <>
  {
    <div className="flex flex-col">
        <div className='font-extrabold text-3xl mb-5 text-black dark:text-white'>{title}</div>
        <div className='flex'>
        {
            
            tags.map((item)=>
            (
                
                <Badge key={item._id}>{item.name}</Badge>
               
            ))
           
        }
         </div>
         <div className='flex gap-10'>
        {
            
            author.map((item)=>
            (
                
               <div key={item._id} className='flex gap-52 mt-10 '>

                <h2 className=' text-black dark:text-white'>{item.name}</h2>
                <h5 className=' text-black dark:text-white' >added 1 week ago</h5>
                <h5 className=' text-black dark:text-white'>{upvotes} votes</h5>
                <h5 className=' text-black dark:text-white'>{downvotes} downvotes</h5>
              
               </div>
               
            ))
           
        }
         </div>
    </div>

  }
  </>
  )
}

export default QuestionCard








// export const tempQuestionData:tempQuestionDataType[] =  
// [
  
//    {
//   _id:1,
//     title:'Cascading in SQLAlchemy?',
//     downvotes:100,
//     tags:[
//       {_id:1,name:"python"},
//       {_id:2,name:"javascript"},
//       {_id:3,name:"typescript"},
     
      
//     ],
//     author:[
//       {
//       _id:1,
//       name:"John Doe",
//       picture:"/"
//       }
//     ],
//    upvotes:10,
//    views:100,