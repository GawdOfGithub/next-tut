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

    { name: "🏠 Home", link: "/Home" },
  { name: "📚 Collections", link: "/Collections" },
  { name: "👥 Community", link: "/Community" },
  { name: "🔍 Find Jobs", link: "/Find Jobs" },
  { name: "🏷️ Tags", link: "/Tags" },
  { name: "➕ Add a question", link: "/" },
  { name: "Login", link: "/" },
  { name: "SignUp", link: "/" },
]