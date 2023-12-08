import { IUser } from "@/database/user.modal"
import { Schema } from "mongoose"
export interface GetQuestionParams {
    page?:number,
    pageSize?:number,
    searchQuery?:string
    filter?:string,


}
export interface CreateQuestion{
    title:string,
    content:string,
    tags:string[],
    author:Schema.Types.ObjectId | IUser
    path:string,


}
export interface GetSavedQuestionsParams{
    clerkId:string,
    page?:number,
    pageSize?:number,
    filter?:string,
    searchQuery?:string,
}
export interface GetUserStatsParam{
    userId:string,
    page?:number,
    pageSize?:number,
}
export interface DeleteUserParams{
    clerkId:string;

}
export interface UpdateUserParams{
    clerkId:string,
    updateData:{
        email:string,
        picture:string,
        username:string,
        name:string
    },
    path:string
}
export interface ToggleSavedQuestionParams{
    userId:string,
    QuestionId:string,
    path:string
}

export interface CreateUserParams
{
    clerkId:string,
    email:string,
    picture:string,
    username:string,
    name:string
}

//timestamp -4 min 39 sec  title - display question at homepage