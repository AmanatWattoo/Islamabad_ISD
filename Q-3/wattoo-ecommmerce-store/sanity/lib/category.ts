import { defineField } from "sanity";

export const category = {
    name:'category',
    title:'Category',
    type:'document',
    fields:[
        defineField({
            name:'name',
            title:'Product Category',
            type:'string'
        })
    ]
}