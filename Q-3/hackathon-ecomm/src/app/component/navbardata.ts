import { AiFillHome } from 'react-icons/ai';
import { GrUserManager } from 'react-icons/gr';
import { GiFemaleVampire } from 'react-icons/gi';
import { FaChild } from 'react-icons/fa';
import {IoMdArrowDropdown} from'react-icons/io';
interface NavbarDataType {
  title: string;
  href: string;
  icon?: string;
  dropicon?: string;
  isDropdown?: boolean;
  dropdownItems?: NavbarDataType[]; // Add nested dropdown items
}

export const NavbarData: NavbarDataType[] = [
  {
    title: 'Home',
    href: '/',
    icon: AiFillHome,
  },
  {
    title: 'Male',
    href: '/Male',
    icon: GrUserManager,
    isDropdown: true,
    dropicon: IoMdArrowDropdown,
    dropdownItems: [
      {
        title: 'Shirt',
        href: '/Male/Shirt',
      },
      {
        title: 'Pants',
        href: '/Male/Pants',
      },
      {
        title: 'Shorts',
        href: '/Male/Shorts',
      },
      // Add more items as needed
    ],
  },
  {
    title: 'Female',
    href: '/Female',
    icon: GiFemaleVampire,
    isDropdown: true,
    dropicon: IoMdArrowDropdown,
    dropdownItems: [
      {
        title: 'Shirt',
        href: '/Female/Shirt',
        isDropdown: true,
        dropicon: IoMdArrowDropdown,
        dropdownItems: [
          {
            title: 'Winter Season',
            href: '/Female/Shirt/Winter',
          },
          {
            title: 'Summer Season',
            href: '/Female/Shirt/Summer',
          },
        ],
      },
      {
        title: 'Pants',
        href: '/Female/Pants',
        isDropdown: true,
        dropicon: IoMdArrowDropdown,
        dropdownItems: [
          {
            title: 'Winter Season',
            href: '/Female/Pants/Winter',
          },
          {
            title: 'Summer Season',
            href: '/Female/Pants/Summer',
          },
        ],
      },
      // Add more items as needed
    ],
  },
  {
    title: 'Kids',
    href: '/Kids',
    icon: FaChild,
    isDropdown: true,
    dropdownItems: [
      {
        title: 'Shirt',
        href: '/Kids/Shirt',
        isDropdown: true,
        dropdownItems: [
          {
            title: 'Winter Season',
            href: '/Kids/Shirt/Winter',
          },
          {
            title: 'Summer Season',
            href: '/Kids/Shirt/Summer',
          },
        ],
      },
      {
        title: 'Pants',
        href: '/Kids/Pants',
        isDropdown: true,
        dropdownItems: [
          {
            title: 'Winter Season',
            href: '/Kids/Pants/Winter',
          },
          {
            title: 'Summer Season',
            href: '/Kids/Pants/Summer',
          },
        ],
      },
      // Add more items as needed
    ],
  },
];
