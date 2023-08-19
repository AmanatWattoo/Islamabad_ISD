'use client'
import React, { useState } from 'react';
import { NavbarData } from '@/app/component/navbardata';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { GrUserManager } from 'react-icons/gr';
import { GiFemaleVampire } from 'react-icons/gi';
import { FaChild } from 'react-icons/fa';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  function resolveIcon(iconName: string | undefined) {
    switch (iconName) {
      case 'AiFillHome':
        return <AiFillHome />;
      case 'GrUserManager':
        return <GrUserManager />;
      case 'GiFemaleVampire':
        return <GiFemaleVampire />;
      case 'FaChild':
        return <FaChild />;
      // Add cases for other icons
      default:
        return null; // Return a default component or null
    }
  }

  return (
    <nav className="flex">
      <div onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        <IoMdArrowDropdown />
      </div>
      <ul className={`navbar-list ${isMobileNavOpen ? 'active' : ''}`}>
        {NavbarData.map((item, index) => (
          <li key={index} className="flex">
            <Link href={item.href} className="navbar-link">
              {resolveIcon(item.icon)}
              {item.title}
              {item.isDropdown && <IoMdArrowDropdown />}
            </Link>
            {item.isDropdown && (
              <ul className="flex">
                {item.dropdownItems?.map((subItem, subIndex) => (
                  <li key={subIndex} className="">
                    <Link href={subItem.href} className="flex flex-col">
                      {subItem.title}
                      {subItem.isDropdown && <IoMdArrowDropdown />}
                    </Link>
                    {subItem.isDropdown && (
                      <ul className="flex">
                        {subItem.dropdownItems?.map((nestedItem, nestedIndex) => (
                          <li key={nestedIndex} className="flex">
                            <Link href={nestedItem.href} className="">
                              {nestedItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
