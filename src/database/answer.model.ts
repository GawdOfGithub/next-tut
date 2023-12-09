import {Schema,models,model,Document} from 'mongoose'
export interface IAnswer extends Document
{
    author:Schema.Types.ObjectId
    question:Schema.Types.ObjectId
    content:String
    upvotes:Schema.Types.ObjectId[]
    downvotes:Schema.Types.ObjectId[]
    createdAt:Date
}
const AnswerSchema = new Schema({
    author:{type:Schema.Types.ObjectId,ref:'User',required:true},
    question:{type:Schema.Types.ObjectId,ref:'Question',required:true},
    content:{type:String,required:true},
    upvotes:[{types:Schema.Types.ObjectId,ref:'User'}],
    downvotes:[{types:Schema.Types.ObjectId, ref:'User'}],
    createdAt:{type:Date,default:Date.now}
})
const Answer = models.Answer || model('Answer',AnswerSchema)
export default Answer