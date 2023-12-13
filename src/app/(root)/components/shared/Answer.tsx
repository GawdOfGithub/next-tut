"use client"
import React,{useRef} from 'react'
import {answerFormSchema} from '@/schema/schema'
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Editor } from '@tinymce/tinymce-react';
import { Badge } from '@/components/ui/badge'
import { useRouter,usePathname } from 'next/navigation'
import { createAnswer } from '@/lib/actions/answer.action'
// import { auth } from '@clerk/nextjs'
import { useState } from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createQuestion } from '@/lib/actions/question.action'
import { redirect } from 'next/navigation'
import Page from '../../Question/[id]/page'

type Props = {
  questionId:string,
  userId:string
}
const Answer = ({questionId,userId}:Props) => {
const [provideAnswer, setProvideAnswer] = useState(false);


const router = useRouter()
const pathname = usePathname()


 const [isSubmitting, setIsSubmitting] = useState(false);
 
  const editorRef = useRef(null);
  const form = useForm<z.infer<typeof answerFormSchema>>({
    resolver: zodResolver(answerFormSchema),
    defaultValues: {
        answer:""
    
    },
  })
  async function onSubmit(values: z.infer<typeof answerFormSchema>) {
    console.log(values);
    setIsSubmitting(true)
    try{
    console.log(values);
    await createAnswer({
      content:values.answer,
      author:userId,
      question:questionId,
      path:"/"

    })
    }
    catch(error)
    {
        console.log(error);
    }
    finally{
      setIsSubmitting(false)
    }
  
  }
  
   
  return (
  
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
      
            <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <>
            <FormItem className='min-w-full'>
            <FormLabel className='text-black dark:text-white'>Please write your answer below</FormLabel>
              <FormControl>
              <Editor 
            apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
            //@ts-ignore
      onInit={(evt, editor) => editorRef.current = editor}
      onBlur={field.onBlur}
      onEditorChange={(content)=>field.onChange(content)}
      init={{
        height: 500,
        width:1000,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor','codesample',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | ' +
        ' codesample| bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
    />
              </FormControl>
              <FormDescription>
              Be specific and imagine that you are asking question to another user
              </FormDescription>
              <FormMessage />
            </FormItem>
            </>
            )}/>
         
              <Button className="bg-yellow-500"type="submit" disabled={isSubmitting}>Submit</Button>
            </form>
    </Form>
    </>)
   
          }
          export default Answer
          
              

