'use client'
import React, { useState } from 'react';
import { NavbarData, NavbarDataType } from './navbardata';
import { IoMdArrowDropdown } from 'react-icons/io';
import {BiSearch} from 'react-icons/bi'
import {BsCart2} from 'react-icons/bs'
import MobileSubDrop from './mobilenav';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
interface NavbarProps {}

const Navebar: React.FC<NavbarProps> = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null | boolean>(null);
  const [cartItemCount, setCartItemCount] = useState(5)
  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const handleDropdownMouseLeave = () => {
    setOpenDropdown(null);
  };
  // dropdown items
  const renderDropdown = (items: NavbarDataType[]) => {
    return (
      <div>
      <ul
        className=" absolute rounded-md shadow-md"
        onMouseLeave={handleDropdownMouseLeave}
      >
        {items.map((item, index) => (
          <li key={index} className=" px-4 py-2 border-t w-[10rem] hover:bg-black bg-orange-400 ">
            <a href={item.href} className="">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      </div>
    );
  };

  const renderNavbarItem = (item: NavbarDataType) => {
    if (item.isDropdown && item.dropdownItems) {
      return (
        <li key={item.title} className="relative group">
          <button
            className="flex items-center px-4 py-2 hover:bg-gray-100"
            onMouseEnter={() => handleDropdownToggle(item.title)}
          >
            <div className='mr-2'>
              {item.icon && <item.icon />}
            </div>
            <span>{item.title}</span>
            <IoMdArrowDropdown className="ml-auto -rotate-90 group-hover:rotate-0 duration-300 " />
          </button>
          
          {openDropdown === item.title && renderDropdown(item.dropdownItems)}
        </li>
      );
    } else {
      return (
        // items who don't have dropdown items. 
        <li key={item.title}>
          <Link href={item.href} className="flex items-center px-4 py-2">
            <div className='mr-2'>
              {item.icon && <item.icon />}
            </div>
            <span>{item.title}</span>
          </Link>
        </li>
      );
    }
  };
// Navbar outer items section
  return (
    <div className='sticky top-0  backdrop-blur-sm group-hover:bg-green-800/[0.05] text-white '>
    <nav className="bg-black/[0.80] font-semibold">
      <ul className="flex justify-around ">
      <Link href={"/"}>
        <div >
          <h1 className='py-2 font-urdu text-orange-400
           font-medium'>وٹو سپر مارکیٹ</h1>
          
        </div>
        </Link>
        {NavbarData.map((item) => renderNavbarItem(item))}
        <div className=" bg-white border-2 flex border-1 items-center text-gray-600 rounded-md ">
          
          <input
            type="text"
            placeholder="Search Item here"
            className=" focus:outline-none w-90 px-6 items-center pl-1 mx-3 py-1 pr-2 flex-grow "
          />
          <div className='mr-5'>
          <BiSearch size={25} />
          </div>
        </div>
        <div className=" relative flex justify-center rounded-full w-11 h-11 items-center bg-orange-300/[0.35] flex-shrink-0 ">
          <div
            className="absolute top-1 font-light right-2 
            text-xs bg-red-500 text-white rounded-full 
            h-4 w-4 flex justify-center"
          >
            {cartItemCount}
          </div>
          <BsCart2 size={25} />
        </div>
        {/*-------------------- Mobile View Section------------- */}
      <div onClick={()=>setOpenDropdown(!openDropdown)} className='lg:hidden' >
          {openDropdown? (<div className='flex lg:hidden'>
            <GrClose size={25}/>
          </div>)
          :
           (<div className='flex lg:hidden'>
            <GiHamburgerMenu size={35}/>
           </div>)
           }
        </div>
      </ul>
      <div className='lg:hidden'>
        {openDropdown && <Mobileview/>} 
      </div>
    </nav>
    </div>
  );
};

export default Navebar;

const Mobileview = () => {
  return (
    <div>
      <div>
        {NavbarData.map((item:NavbarDataType, index:number)=>{
          return(
            <MobileSubDrop key={index} item={item}/>
          )
        })}
      </div>
    </div>
  );
};

