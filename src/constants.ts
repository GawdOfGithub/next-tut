import { themeType } from "."
export const  theme:themeType[] =
[
    {name:"☀️Light Mode ",value:"light"},
    {name:"🌙Dark Mode",value:"dark"},
    {name:"🌓System Mode",value:window.matchMedia('(prefers-color-scheme: dark)').matches?"dark":"light"},
]

