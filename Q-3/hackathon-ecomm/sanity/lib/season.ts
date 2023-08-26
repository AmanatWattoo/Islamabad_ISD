import { defineField } from "sanity";
export const season={
    name: 'season',
    title: 'Product season',
    type:'document',
    fields: [
        defineField({
            name:'Season',
            title: ' Product Season',
            type:'string',
            validation: Rule => Rule.required()
        })
    ]
}