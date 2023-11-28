import { themeType } from "."
import { SideBarType } from "."
import { QuestionDataType } from "."
import {TagDataType} from "."
export const  theme:themeType[] =
[
    {name:"☀️Light Mode ",value:"light"},
    {name:"🌙Dark Mode",value:"dark"},
    {name:"🌓System Mode",value:"dark"},
]

export const Sidebar:SideBarType[] =
[

    { name: "🏠 Home", link: "/" },
  { name: "📚 Collections", link: "/Collections" },
  { name: "👥 Community", link: "/Community" },
  { name: "🔍 Find Jobs", link: "/Find Jobs" },
  { name: "🏷️ names", link: "/names" },
  { name: "❓ Ask a question", link: "/ask" },
  // { name: "Login", link: "/" },
  // { name: "SignUp", link: "/" },
]
export const QuestionData:QuestionDataType[] = 
[
  {_id:1, question:"Best Practices for data fetching in next applications "},
  {_id:2, question:"Async Await Function not working properly "},
  {_id:3,question:"A quick brown fox jumps over the lazy dog"},
  {_id:4,question:"Best Practices"},
  {_id:5,question:"Best Practices"},
  {_id:6,question:"Best Practices"},
  {_id:7,question:"Best Practices"},
  {_id:8,question:"Best Practices"},
]
export const TagData:TagDataType[] =  
[
  
    {_id:1,totalQuestions:5,name:"next"},
    {_id:2,totalQuestions:5,name:"javascript"},
    {_id:3,totalQuestions:5,name:"react"},
    {_id:4,totalQuestions:5,name:"angular"},
    {_id:5,totalQuestions:5,name:"svetle"},
  
]