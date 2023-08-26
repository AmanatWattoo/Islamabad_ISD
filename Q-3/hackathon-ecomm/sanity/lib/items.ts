import { defineField,defineType } from "sanity";
export default defineType({
    name:"items",
    type:"document",
    title:"Products",
    fields:[
        defineField({
            name:"title",
            type:"string",

        }),
        defineField({
            name:"item images",
            type:"image",
            title:"product images",

        }),
        defineField({
            name:"description",
            type:"string",
            title:"Description"
        }),
        defineField({
            name:"price",
            type:"number",
            title:"price"
        }),
        defineField({
            name:"category",
            type:"string",
            title:"category",
            options:{
                list:[
                    {title:"Men",value:"men"},
                    {title:"Women",value:"women"},
                    {title:"Kids",value:"kids"},
                ]
            }
        }),
    ]
})