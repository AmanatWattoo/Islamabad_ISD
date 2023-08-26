import FetchData from "../../../../sanity/fetchdata"
import { urlForImage } from "../../../../sanity/lib/image"

const AllProducts =async () => {
  const data = await FetchData()
  console.log("this is fetched: " , data)
  return (
    <div className="grid grid-cols-3 items-center">
      {data.map((product:any)=>(
        <div className="items-center flex flex-col justify-center  text-center item-center">
          <img src={urlForImage(product.image[1]).url()}/>
          <h1>{product.productName}</h1>
          <p>{product.Detail}</p>
          <h1>{product.category.name}</h1>
          <p>{product.productType.name}</p>
          <div className="flex space-x-2">
          <p className="font-bold">Stock Available</p>
          <p>{product.Quantity}</p>

          </div>
          <p className="flex gap-2 font-bold"><span>Rs:</span>{product.Price}</p>
        </div>
      ))}
    </div>
  )
}

export default AllProducts