export interface navDataType{
    title:string,
    isDropDown:boolean
    href:string
    dropdownData?:Array<navDataType>
}
export const NavBar: Array<navDataType> = [
  {
      title: "Female",
      href: "/female",
      isDropDown: true,
      dropdownData:[
        {
          title:'Dresses',
          href:'/Female/Dresses',
          isDropDown:false
        },
        {
          title:'T-Shirts',
          href:'/Female/T-Shirts',
          isDropDown:false
        },
        {
          title:'Pents',
          href:'/Female/Pents',
          isDropDown:false
        },
        {
          title:'Kurta',
          href:'/Female/Kurta',
          isDropDown:false
        },
        {
          title:'New',
          href:'/Female/new',
          isDropDown:false
        }
      ] 
  },

  {
    title: "Male",
    href: "/Male",
    isDropDown: true,
    dropdownData:[
      {
        title:'Jackets',
        href:'/Male/Jackets',
        isDropDown:false
      },
      {
        title:'Shirts',
        href:'/Male/Shirts',
        isDropDown:false
      },
      {
        title:'Pents',
        href:'/Male/Pents',
        isDropDown:false
      },
      {
        title:'Kurta',
        href:'/Male/Kurta',
        isDropDown:false
      },
      {
        title:'Sweater',
        href:'/Male/sweater',
        isDropDown:false
      }

    ] 
},
{
  title: "Kids",
  href: "/kids",
  isDropDown: false, 
},
{
  title: "All Products",
  href: "/allProducts",
  isDropDown: true,
  dropdownData:[
    {
      title:'Swater',
      href: "/allproduts/Sweater",
      isDropDown: true,
    },
    {
      title:'T-Shirt',
      href: "/allproducts/T-shirts",
      isDropDown: true,
    },
    {
      title:'Track-suits',
      href: "/allproducts/tracksuit",
      isDropDown: true,

    },
  ] 
},
]