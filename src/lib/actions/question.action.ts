"use server"
import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose"
import Tag from "@/database/tag.model";
import User from "@/database/user.modal";
import { GetQuestionParams, QuestionVoteParams } from "./shared.types";
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
export async function upvoteQuestion(params:QuestionVoteParams) {
    try
    {
        connectToDatabase()
        const {questionId,userId,hasUpvoted,hasdownVoted,path} = params;
        let updateQuery = {}
        if(hasUpvoted)
        {
            updateQuery = {$pull:{upvotes:userId}}
        }
        else if(hasdownVoted){
            updateQuery = {
                $pull:{downvotes:userId},
                $push:{upvotes:userId}
            }
        }
            else{
                updateQuery = {$addToSet:{upvotes:userId}}
            }
        }


    catch(error)
    {
        console.log(error);
    }
    
}
export async function downvoteQuestion(params:QuestionVoteParams)
{
    try
    {
        connectToDatabase()
        const {questionId,userId,hasUpvoted,hasdownVoted,path} = params
        let updateQuery = {}
        if(hasdownVoted)
        {
            updateQuery = {$pull:{downvotes:userId}}

        }
        else if(hasUpvoted)
        {
            updateQuery =
            {
            $pull:{upvotes:userId},
            $push:{downvotes:userId}
            }
        }
        else{
            updateQuery = {$addToSet:{downvotes:userId}}
        }
        revalidatePath(path)

    }
    catch(error)
    {
        console.log(error);
        throw error
    }
}
