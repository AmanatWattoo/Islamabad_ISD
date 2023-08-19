import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator } from "@/components/ui/menubar"
import { NavBar, navDataType } from "./navdata"
import Link from "next/link"

const Navebar = () => {
  return (
    <div>
     {/*--------- Desktop view NavBar--------- */}
     <Menubar>
      <MenubarMenu>
        <img src={'/Logo.webp'} alt="logo" />
        
       
         {NavBar.map((item: navDataType, index: number)=>(
           <li className="relative hover:bg-black/[0.03] flex justify-center items-center cursor-pointer group text-lg">
            <Link href={item.href}>{item.title}</Link>
            <MenubarSeparator/>
           </li>
         ))}
        
      
      </MenubarMenu>
      </Menubar>   
    </div>
  )
}

export default Navebar