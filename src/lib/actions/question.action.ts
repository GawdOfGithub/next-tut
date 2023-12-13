"use server"
import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose"
import Tag from "@/database/tag.model";
import User from "../user.modal";
import { GetQuestionParams } from "./shared.types";
import { revalidatePath } from "next/cache";

export async function createQuestion(params:any)
{
    try
    {
        connectToDatabase()
        const{title,content,tags,author,path} = params;
        const question = await Question.create({
            title,
            content,
            author
        })
        const tagDocuments = []
        for(const tag of tags){
            const existingTag = await Tag.findOneAndUpdate(
               {name:{$regex:new RegExp(`^${tag}$`,"i")}},
              {$setOnInsert:{name:tag},$push:{question:question._id}},
              {upsert:true,new:true}


            )
            tagDocuments.push(existingTag._id)
        }
        await Question.findByIdAndUpdate(question._id,
            {
                $push:{tags:{$each:tagDocuments}}
            })
            revalidatePath(path)

    }
    catch(error)
    {
        console.log(error);
    }
}
 export async function getQuestionById(params:any)
 {
   try
    {
        connectToDatabase()
    const {id} = params
    console.log(id);
    const question = await Question.findById(id)
    .populate({path:'tags',model:Tag,select:'_id name'})
    .populate({path:'author',model:User,select:'_id clerkId name picture'})
    return question
  
    }
    catch(error)
    {
        console.log(error);
    }

}
export async function getQuestions(params:GetQuestionParams) {
    try{
        connectToDatabase() 
        const questions = await Question.find({})
        .populate({path:'tags',model:Tag})
        .populate({path:'author', model:User})
        return {questions}

    }
    catch(error)
    {
        console.log(error);
    }

    
}