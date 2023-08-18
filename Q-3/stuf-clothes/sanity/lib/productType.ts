import { defineField } from "sanity";

export const productType ={
    name:'productType',
    title:'Product type',
    type:'document',
    fields:[
        defineField({
            name: 'name',
            title:'Product Type',
            type: "string",
        })
    ]
}