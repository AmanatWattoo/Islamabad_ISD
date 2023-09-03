import Image from "next/image"
import FetchData from "../../../../sanity/fetchdata"
import { urlForImage } from "../../../../sanity/lib/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
const AllProducts = async () => {
  const data = await FetchData()
    
  return (
    <div className="grid bg-green-800/[0.05] grid-cols-1 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center py-10 md:py-6">
      {data.map((product: any) => (
        <Link href={`/product/${product.slug.current}`} key={product._id} className="bg-white p-4 rounded-lg shadow-md hover:scale-105 duration-300">
          <div className="mb-4">
            <Image
              className="aspect-square "
              src={urlForImage(product.image[0]).url()}
              alt="product image"
              height={400}
              width={400}/>
          </div>
          <h1 className="text-xl font-semibold mb-2">{product.productName}</h1>
          <p>{product.detail}</p>
          <p className="text-gray-600 mb-2">{product.productType.name}</p>
          <div className="flex space-x-2 mb-2">
            <p className="font-bold text-green-500">Stock Available</p>
            <p>{product.Quantity}</p>
          </div>
          <p className="flex gap-2 font-bold text-indigo-600">
            <span>Per Item Rs:</span>
            {product.Price}
          </p>
          <div className="flex justify-center items-center">
            <Button>Add to Cart</Button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AllProducts
