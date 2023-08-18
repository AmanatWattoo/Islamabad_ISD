import { defineField } from "sanity";

export const product = {
    name:"product",
    type:"document",
    fields:[
        {
            name:'productName',
            title:'Product Name',
            type:'string'
        },
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'productName',
              maxLength: 200, // will be ignored if slugify is set
              slugify: (input) => {
                  return input
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .slice(0, 200);
              }
            }
          }),
        defineField({
            name: 'productType',
            title: 'Product Type',
            type: "reference",
            to: [
                {
                    type:'productType'
                }
            ]
        }),
        defineField({
            name:'size',
            title:'Product Size',
            type:"array",
            of:[
                {
                    type:'string'
                }
            ]
        }),
        {
            name:'Detail',
            title:'Product Detail',
            type:'array',
            of:[
                {
                    type:"block"
                }
            ]
        },
        {
            name:'Price',
            title:'Product Price',
            type:'number'
        },
        defineField(
            {
                name:'category',
                title:'Product Category',
                type:'reference',
                to:[
                    {
                        type:'category'
                    }
                ]
            }
        ),
        {
            name:'image',
            title:'Product Image',
            type:'array',
            of:[
                {
                    type:'image',
                    fields:[
                        defineField({
                            name:'alt',
                            type:'text',
                            title:'Alternative text'
                        })
                    ]
                }
            ]
        },
        defineField({
            name: 'Quantity',
            type: "number",
            title:'Product Quantity'
        })
    ]   
}