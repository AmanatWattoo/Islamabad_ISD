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
    title:"Electronics",
    href:"/Electronics",
    isdrop: true,
    dropdata: [
        {
            title:"Washing Machine",
            href:"/Washing_Machine",
            isdrop: false,
        },
        {
            title:"Coffee maker",
            href:"/Coffee_Maker",
            isdrop: false,
        },
        {
            title:"oven",
            href:"/oven",
            isdrop: false,
        },
        {
            title:"Mixer",
            href:"/Mixer",
            isdrop: false,
        }
    ]
},
{
    title:"Agriclature",
    href:"/Agriclature",
    isdrop: true,
    dropdata: [
        {
            title:"Tractor",
            href:"/Tractor",
            isdrop: false,
        }
    ]
},
{
    title:"About",
    href:"/About",
    isdrop: false,
},
]