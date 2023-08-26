import { client } from "./lib/client"

const FetchData =async () => {
    const data = await client.fetch(`
    *[_type == "product"] {
        _id,
        productName,
        slug,
        season,
        productType->{
        
          name
        },
        size,
        Detail,
        Price,
        category->{
          name
        },
        image,
        Quantity
    }
    
    
    `)
    return data
}

export default FetchData