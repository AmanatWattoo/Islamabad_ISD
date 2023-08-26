import { defineField } from "sanity";

export const size ={
    name:'size',
    title:'Product Size',
    type:'document',
    fields:[defineField({
        name: 'name',
        title: 'Product Size',
        type: 'array',
        of: [
            { 
               type: 'string'
            }
        ]
    })]
}