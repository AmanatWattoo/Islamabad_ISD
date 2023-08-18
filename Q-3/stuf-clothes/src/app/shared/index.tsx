import { FC } from "react"
const Wraper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4">
        {children}
        </div>
  )
}

export default Wraper