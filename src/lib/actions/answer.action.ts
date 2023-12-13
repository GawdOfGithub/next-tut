import Question from "@/database/question.model";
import { revalidatePath } from "next/cache";
import { CreateAnswerParams } from "./shared.types";
import { connectToDatabase } from "../mongoose";
import Answer from "@/database/answer.modal";



export async function createAnswer(params:CreateAnswerParams) {
  try {
    connectToDatabase()
    const {content,author,question,path} = params
    const newAnswer = new Answer({content,author,question})
    await Question.findByIdAndUpdate(question, {
        $push:{answers:newAnswer._id}
    })
    revalidatePath(path)
    
  } catch (error) {
    console.error(error);
  }
}