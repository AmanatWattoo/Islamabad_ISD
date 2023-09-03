import { client } from "./lib/client"

const FetchData =async () => {
    const data = await client.fetch(`
    *[_type == "product"] 
  `)
    return data

}

export default FetchData