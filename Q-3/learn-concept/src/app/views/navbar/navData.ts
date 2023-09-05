export interface navDataType{
    title: string,
    href: string,
    isdrop?: boolean,
    dropdata?: navDataType[],
}
export const Navbar:navDataType[] =[
    {
        title:"Electrical",
        href:"/Electronics",
        isdrop: false,
},
{
    title:"Mechanical",
    href:"/Mechanical",
    isdrop: true,
    dropdata: [
        {
            title:"Electrical",
            href:"/Electronic",
            isdrop: false,
        },
        {
            title:"Top",
            href:"/Electronic",
            isdrop: false,
        }
    ]
},
{
    title:"Agriclature",
    href:"/Agriclature",
    isdrop: false,
},
{
    title:"About",
    href:"/About",
    isdrop: false,
},
]