
import { Button } from "@/components/ui/button";
import {TiShoppingCart} from 'react-icons/ti'
import Container from "../ui/containter";
import Product from "../products/page";
import Link from "next/link";

const HeroSection = () => {
  const btntext ="Start \n Shoping"
    return (
    <Container>
    <div className=" px-6 flex md:flex-row flex-col justify-between items-center bg-black/[0.01] py-4">
      {/* -----------Right Side ---------------- */}
      <div>
        <div className="space-y-5 max-w-sm">
        
        <Button 
          aria-label="redirect to end of the page "
          className="font-medium bg-blue-400 hover:bg-blue-400">Sale 70%</Button>
            <h1 className="text-6xl text-gray-800 font-bold">An Industrial Take on Streetwear</h1>
            <p className="text-gray-500 py-3">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
        <Link href={"/allproducts"}>
        <Button size={"lg"} 
        aria-label="redirect to shoping items "
        className=" w-40 h-16 flex px-2 items-center space-x-3 ">
            <TiShoppingCart size={20} />
            <p className="leading-5 whitespace-pre-line  text-lg ">{btntext}</p>
        </Button>
        </Link>
        <div className="flex space-x-6 py-6">
            <img src={"./brand1.webp"} alt="brand 1st logo"/>
            <img src={"./brand2.webp"} alt="brand 1st logo"/>
            <img src={"./brand3.webp"} alt="brand 1st logo"/>
            <img src={"./brand4.webp"} alt="brand 1st logo"/>
        </div>
        </div>
      </div>
      {/* -----------Left side ---------------- */}
      <div className=" max-w-xl py-2 bg-gradient-to-br from-orange-500/[0.12] to-pink-200 rounded-full w-45 h-45">
        <div className=""></div>
        <div>
          <img src={"/header.webp"} alt="this main image" />
        </div>
      </div>
    </div>
    <Product/>
    </Container>
  );
};

export default HeroSection;
