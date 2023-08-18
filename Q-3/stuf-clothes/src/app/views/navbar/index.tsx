'use client'
import { NavBar, navDataType } from "@/app/utils/navbar";;
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import DropDown from "./subDropdown/dropDown";
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import MobileSubDrop from "./subDropdown/mobileSubDrop";

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [cartItemCount, setCartItemCount] = useState(0)
  return (
    //------------------Desktop Nav Bar-------------------------
    <div className="sticky top-0">
    <div className="py-3 bg-white/[0.80] flex justify-between items-center px-2">
      <div className="w-30 flex-shrink-0">
        <img src={"/logo.png"} alt="logo" />
      </div>
      <div className="hidden lg:flex justify-between items-center">
        <ul className=" font-medium flex justify-evenly gap-20">
          {NavBar.map((item: navDataType, index: number) => (
            <li className="relative hover:bg-black/[0.03] flex justify-center items-center cursor-pointer group text-lg">
              <Link href={item.href}>{item.title}</Link>
              {item.isDropDown ? (
                <MdArrowDropDown
                  size={25}
                  className="-rotate-90 group-hover:rotate-2 duration-250"
                />
              ) : (
                ""
              )}
              {item.isDropDown && (
                <div
                  className={`invisible group-hover:visible absolute bg-black/[0.03] top-6 left-0 py-2 px-6`}
                >
                  <DropDown item={item} />
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className=" border flex border-1 items-center text-gray-600 rounded-md ">
          <BiSearch size={25} />
          <input
            type="text"
            placeholder="Search Item here"
            className=" focus:outline-none w-90 px-6 items-center pl-1 mx-3 py-1 pr-2 flex-grow "
          
          />
        </div>
        <div className=" relative flex justify-center rounded-full w-11 h-11 items-center bg-gray-300 flex-shrink-0 ">
          <div
            className="absolute top-1 font-light right-2 
            text-xs bg-red-500 text-white rounded-full 
            h-4 w-4 flex justify-center"
          >
            {cartItemCount}
          </div>
          <BsCart2 size={25} />
        </div>
      </div>
    {/*-------------------- Mobile View Section------------- */}
      <div onClick={()=>setOpen(!isOpen)} >
          {isOpen? (<div className='flex lg:hidden'>
            <GrClose size={25}/>
          </div>)
          :
           (<div className='flex lg:hidden'>
            <GiHamburgerMenu size={35}/>
           </div>)
           }
        </div>
    </div>
    {
    isOpen && <Mobileview />
     }
     </div>
  );
};

export default Navbar;

const Mobileview = () => {
  return (
    <div>
      <div>
        {NavBar.map((item:navDataType, index:number)=>{
          return(
            <MobileSubDrop key={index} item={item}/>
          )
        })}
      </div>
    </div>
  );
};

