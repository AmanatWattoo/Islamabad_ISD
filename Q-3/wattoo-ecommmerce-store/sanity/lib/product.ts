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
            name: 'season',
            type: "string",
            title:'Product season',
            options: {
                list:[
                    {title: 'Spring', value:'spring'},
                    {title: 'Summer', value:'summer'},
                    {title: 'automn', value: 'automn'},
                    {title: 'Winter', value: 'winter'}
                ]
            }
          }),
        defineField({
            name: 'productType',
            title: 'Product Type',
            type: "string",
            options:{
                list:[
                    {title:'Shirt',value: 'Shirt'},
                    {title:'pent',value: 'pent'},
                    {title:'trouser',value: 'trouser'},
                    {title:'Pajma',value: 'Pajma'},
                    {title:'Kurta',value: 'Kurta'},
                    {title:'top',value: 'top'},
                    {title:'short',value: 'short'},
                    {title:'dress',value: 'dress'},
                ]
            }
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
        defineField({
            name:'detail',
            title:'Product Detail',
            type:'array',
            of:[
                {
                    type:'string'
                }
            ]
        }),
        {
            name:'Price',
            title:'Product Price',
            type:'number'
        },
        defineField(
            {
                name:'category',
                title:'Product Category',
                type:'string',
                options:{
                    list:[
                        {title: 'Male', value:'Male'},
                        {title: 'Female', value:'Female'},
                        {title: 'Kids', value: 'Kids'},
                    ]
                }
            
            
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