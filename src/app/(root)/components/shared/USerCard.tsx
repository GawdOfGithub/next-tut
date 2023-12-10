
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Avatar ,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

export default function UserCard()
{
    return(

    <>
<Card className="w-[200px] h-[200px] ">
      <CardHeader>
        <CardTitle>
        <Avatar >
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" height="500" width="500" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    


        </CardTitle>
       
      </CardHeader>
      <CardContent>
        <div className='flex flex-col'>
          
      <div className='font-extrabold '> Anurag Bhandari </div> 
      <div className=''> @anruag </div> 
        </div>
      </CardContent>
      <CardFooter className="flex justify-center ">
        <Badge>NEXT</Badge>
        <Badge>REACT</Badge>
        <Badge>JAVA</Badge>
      </CardFooter>
    </Card>
    </>
    )
}