import { Button } from "@/components/ui/button"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,

} from "@/components/ui/dialog"
import Link from "next/link"

const ShadcnUI = () => {
  return (
    <div className='text-center items-center text-white/[0.80] bg-gradient-to-t to-gray-600 from-gray-200 h-screen '>
    <div>
    <h1 className='text-center  font-pera hover:scale-125 duration-1000 text-white py-[2rem]'>
      Welcome to Shadcn-Ui</h1>
      </div>    
      <div className="font-heading text-4xl py-8 ">
      This is all about Shadcn Ui
      </div>
    <div className="flex justify-center text-white">
    
  {/* All about shadcn   */}
    <div className=" grid grid-cols-6 gap-5  py-5">
      <Link href={"/supports/shadcnui/accordien"} >
      <Button> Go to Accordion</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Alert</Button>
      </Link>
      <Link href={"/supports/shadcnui/alertdialog"} >
      <Button> Go to alert Dialog</Button>
      </Link>
      <Link href={"/supports/shadcnui/aspectration"} >
      <Button> Go to Aspect Ration</Button>
      </Link>
      <Link href={"/supports/shadcnui/avatar"} >
      <Button> Go to Avatar</Button>
      </Link>
      <Link href={"/supports/shadcnui/badge"} >
      <Button> Go to Badge</Button>
      </Link>
      <Link href={"/supports/shadcnui/badge"} >
      <Button> Go to Button</Button>
      </Link>
      <Link href={"/supports/shadcnui/calendar"} >
      <Button> Go to Calendar</Button>
      </Link>
      <Link href={"/supports/shadcnui/card"} >
      <Button> Go to Card</Button>
      </Link>
      <Link href={"/supports/shadcnui/checkbox"} >
      <Button> Go to checkbox</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Collapsible</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Combobox</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Command</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Context Menu</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Data Table</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Date Picker</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Dialog</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Dropdown Menu</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to form</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Hover Card</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Input</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Label</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Menubar</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Navigation Menue</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Date Popover</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Progress</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Radio Group</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Scroll Area</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Select</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Seprator</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Sheet</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Skeleton</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Slider</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Date Switch</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Table</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Tabs</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Textarea</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Date Toast</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Toggle</Button>
      </Link>
      <Link href={"/supports/shadcnui/alert"} >
      <Button> Go to Date Tooltip</Button>
      </Link>
    </div>
      </div>
    </div>
  )
}

export default ShadcnUI