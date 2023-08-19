
import Link from "next/link"
import { FC, useState } from "react"
import { MdArrowDropDown } from "react-icons/md"
import { navDataType } from "./navdata"

const MobileSubDrop: FC<{item:navDataType}> = ({item}) => {
  const [mobileNavSub, setMobileNavSub] = useState<boolean>(false)
  const [isTimeout, setTimeOut] =useState(false)
  function handlesubdrop(){
    setMobileNavSub(!mobileNavSub)
    setTimeout(() => {
      setTimeOut(!isTimeout)
    }, 200);
  }
  return (
    <li className={`${mobileNavSub ? "h-48" : "h-10"} list-none duration-500  `}>
      <div onClick={handlesubdrop}
        className="flex bg-black/[0.05] font-medium justify-between rounded-md duration-300 items-center  text-gray-600">
          <Link href={item.href}>{item.title}</Link>
        {item.isDropDown ? (
          <MdArrowDropDown size={20} className="-rotate-90 group-hover:rotate-2"/>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col  rounded-md bg-black/[0.05] ">     
         {mobileNavSub &&
        item.dropdownData?.map((subitem: navDataType, index: number) => (
          <div className="hover:bg-green-900/[0.20] text-gray-500 font-medium  w-full rounded-md px-5 flex border-t-2" key={index}>
            <Link href={subitem.href}>{subitem.title}</Link>
          </div>
        ))}
        </div>
    </li>
  )
}

export default MobileSubDrop
