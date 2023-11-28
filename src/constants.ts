import { themeType } from "."
import { SideBarType } from "."
export const  theme:themeType[] =
[
    {name:"☀️Light Mode ",value:"light"},
    {name:"🌙Dark Mode",value:"dark"},
    {name:"🌓System Mode",value:window.matchMedia('(prefers-color-scheme: dark)').matches?"dark":"light"},
]

export const Sidebar:SideBarType[] =
[

    { name: "🏠 Home", link: "/" },
  { name: "📚 Collections", link: "/Collections" },
  { name: "👥 Community", link: "/Community" },
  { name: "🔍 Find Jobs", link: "/Find Jobs" },
  { name: "🏷️ Tags", link: "/Tags" },
  { name: "❓ Ask a question", link: "/ask" },
  // { name: "Login", link: "/" },
  // { name: "SignUp", link: "/" },
]