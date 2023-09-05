import { AiOutlineHome } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Navbar, navDataType } from './navData';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <div className='text-3xl flex  justify-between items-center py-4 border-b-2 shadow-sm'>
        <Link href={'/'}>
          <AiOutlineHome />
        </Link>
        <div>
            
        </div>
        <div className=''>
          <BsThreeDotsVertical />
        </div>
        <div className='lg:hidden flex flex-col'>
          {Navbar.map((item: navDataType, index: number) => (
            <Link key={index} className='flex flex-col' href={item.href}>
              {Navbar && item.isdrop ?
              <div className=''><IoMdArrowDropdown />
              {/* drop down data  */}
              <h1 className=' flex flex-col'>{item.dropdata?.map((dpitem:navDataType, index:number)=>(<div>
                {dpitem.title}
              </div>))}</h1>
              </div> :
            <div>{item.title}</div>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
