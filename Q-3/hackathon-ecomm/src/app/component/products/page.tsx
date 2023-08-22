import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Product = () => {
  return (
    <div className='bg-black/[0.01]'>
        {/* // ---------------First Section ---------------- */}
    <div className="py-12 px-2">
      <div className="text-center space-y-3">
        <p className="uppercase text-blue-600 font-medium text-xl">
          promotions
        </p>
        <h3 className="text-4xl font-semibold text-gray-800">
          Our Promotions Events
        </h3>
      </div>
      {/* --------------------Grid---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {/*------------ Grid Item 1------------ */}
        <div className="col-span-1 md:flex-row md:col-span-2  w-full  bg-cat1  flex flex-col justify-between">
          <div className="max-w-[14rem] px-[2rem]">
            <h2 className="text-3xl font-bold py-2">GET UP TO 60%</h2>
            <p className="text-gray-800 text-xl leading-none">
              For the summer season
            </p>
          </div>
          <div className="flex items-center justify-evenly">
            <Image
              src={"/event1.webp"}
              height={300}
              width={200}
              alt="image 1"                                                   
            />
          </div>
        </div>
        {/* -----------------------secondn grid Item ---------------*/}
        <div className="bg-cat2  items-center flex flex-col   justify-center  md:row-span-2 w-full ">
          <div className="py-2 px-2 items-center text-center">
            <h2 className="text-xl font-medium">Flex Sweat Shirt</h2>
            <div className="flex space-x-4 justify-center">
                <div className="text-xl">
                  <del>$100.00</del>                                              
                </div>
                <div className="font-bold text-xl">
                  <ins className="no-underline">
                  $75.00
                  </ins>
                  </div>
            </div>
          </div>
          {/* ------------------3rd item------- */}
          <div className=" flex items-center py-4  justify-center text-center">
            <Image
              src={"/event2.webp"}
              alt="second image"
              height={350}
              width={200}
            />  
          </div>  
        </div>
        <div className="bg-cat3  row-span-2 flex flex-col md:flex-row w-full">
        {/* --------------Fourth Image---------------------- */}
        <div className="py-2 px-2 items-center text-center">
            <h2 className="text-xl font-medium">
              Flex Push Button Bomber
              </h2>
            <div className="flex space-x-4 justify-center">
                <div className="text-xl">
                 <del> $300.00</del>
                  </div>
                <div className="font-bold text-xl">
                 <ins className="no-underline">$75.00</ins>
                  </div>
            </div>
            <div className="flex items-center justify-center">
            <Image className="py-8"
              src={"/event3.webp"}
              alt="second image"
              height={350}
              width={180}
            />  
          </div>
          </div>
        </div>
        {/* ---------------Fourth Image------------- */}
        <div className="bg-cat4 text-white text-center py-4 col-span-2 items-center  w-full flex flex-col justify-center">
          <h1 className="text-3xl font-medium ">GET 30% Off</h1>
          <p className="font-semibold">USE PROMO CODE</p>
          <Button className=" w-72 text-xl text-center bg-gray-600/[0.80]">
            DINEWEEKENDSALE
          </Button>
        </div>
      </div>
      {/* ---------------------Second Section------------ */}
      <div className="text-center space-y-3">
        <p className="uppercase text-blue-600 font-medium text-xl">
          Products
        </p>
        <h3 className="text-4xl font-semibold text-gray-800">
          Check What We Have
        </h3>
      </div>
      
      <div className="flex justify-evenly gap-4 mb-6 py-4">
        {/* --------------1st item--------------- */}
        <div className="bg-cat3 h-80">
          <Image src={"/blackshirt.png"} alt="Black Shirt Image"
          height={450} width={450} />
        <div className=" flex-col py-3 font-medium text-xl text-center justify-center">
          <h2>Brushed Roglan Sweatshirt</h2>
          <p>$450</p>
        </div>
        </div>
        {/* ----------------------Second Item----------- */}
        <div className=" bg-cat3 h-[30rem] py-8 ">
        <div>
          <Image src={"/header.webp"} alt="Main Image" height={450} width={465}/>
        </div>
        <div className=" flex-col py-6 font-medium text-xl text-center justify-center">
          <h2>Cemeryn Sash Tie Dress</h2>
          <p>$450</p>
        </div>
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default Product