'use client'
import { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineSearch,
} from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsCartCheck, BsThreeDotsVertical } from 'react-icons/bs';
import { Navbar, navDataType } from './navData';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleSubdrop = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? -1 : index);
  };
  return (
    <div className='sticky top-0'>
      <div className='text-3xl flex relative flex-grow-0 justify-between items-center border-b-2 shadow-sm bg-teal-700/[0.10]'>
        <Link href={'/'}>
          <AiOutlineHome />
        </Link>
        <div className='border-2 flex items-start rounded-md bg-white'>
          <Input placeholder='Search Item Here' />
          <AiOutlineSearch />
        </div>
        <div className='bg-sky-400/[0.25] flex flex-col items-center relative leading-10 justify-center w-[2.85rem] h-[2.85rem] rounded-full'>
          <p className='text-sm flex text-center justify-center ml-3  mb-7  absolute bg-pink-500/[0.50] h-4 w-4 rounded-full '>5</p>
          <BsCartCheck size={20} />
        </div>
        {/* __________________Three dot Section ----------------------------------- */}
        <div className='cursor-pointer' onClick={toggleDropdown}>
          <BsThreeDotsVertical />
        </div>
    {/* Map data */}

    {showDropdown && (
          <div className='flex  flex-col text-center border-2 absolute top-full duration-300 bg-black/[0.05] w-full'>
            {Navbar.map((item: navDataType, index: number) => (
              <div key={index} className='flex flex-col '>
                {item.isdrop ? (
                  <div>
                    <div
                      onClick={() => toggleSubdrop(index)}
                      className='p-2 flex items-center justify-center border-2'
                    >
                      <h1 className='flex flex-col'>{item.title}</h1>
                      <span className=''>
                        <IoMdArrowDropdown />
                      </span>
                    </div>
                    {/* Dropdown data */}
                    {openDropdownIndex === index && (
                      <ul className=''>
                        {item.dropdata?.map((dpitem: navDataType, dpIndex: number) => (
                          <Link href={dpitem.href} key={dpIndex} className='p-2 flex flex-col border-t-2 duration-300'>
                            {dpitem.title}
                          </Link>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className='p-2 hover:bg-black/[0.02] w-full border-t-2'>
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
