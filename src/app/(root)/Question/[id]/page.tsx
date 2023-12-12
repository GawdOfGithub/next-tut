import React from 'react'
import { getQuestionById } from '@/lib/actions/question.action'
import { Avatar ,
    AvatarFallback,
    AvatarImage,
  } from '@/components/ui/avatar'
  import { Badge } from '@/components/ui/badge'
import ParseHTML from '../../components/shared/ParseHTML'

type Props = {
    params:{
        id:string
    }
}

const Page = async ({params}:Props) => {
    try
    {
    const {id} = params
    const question = await getQuestionById({id})
    console.log(`It is coming from here${id}`);
    console.log(question);
    console.log(question.author.picture);
    
   

  return (
    <>
    <div className='flex flex-col'>
    <div className='flex '>
       <Avatar >
      <AvatarImage src={question.author.picture} alt="@shadcn"  />
      <AvatarFallback >CN</AvatarFallback>
    </Avatar>
    <div>{question.author.name}</div>
    
         <div className='ml-3'>
  {question.tags.map((item:any,index:number) =>
        
        
        (
           
            <Badge key={index} >{item.name}</Badge>
            
        ))}
        </div>
    
    </div>
    <div className='text-4xl font-bold mt-4 mb-4 '>
        {question.title}
    </div>
    <main>
    <ParseHTML data={question.content}/>
     
    </main>
    </div>
    </>
  );
    }
    catch(error)
    {
      

        console.log(error);
    }
}

export default Page



// {
//     _id: new ObjectId('65759f7244691924eccbb9cc'),
//     title: 'How to remove hydration error from next 13?',
//     content: '<p>Getting hydration error on next 13</p>\n' +
//       '<pre class="language-javascript"><code>const [data] =data</code></pre>',
//     tags: [ new ObjectId('65759f72f728e0dfe2462795') ],
//     views: 0,
//     upvotes: [],
//     downvotes: [],
//     author: new ObjectId('65759067c54a7f2e1dbc61e2'),
//     answers: [],
//     createdAt: 2023-12-10T11:22:26.423Z,
//     __v: 0
//   }