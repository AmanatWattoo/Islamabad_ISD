'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

//this component has been created to create multiple models.
interface ModelProps{
    title:string;
    discription:string;
    isopen:boolean;
    oncClose:()=>void;
    children?:React.ReactNode;
}
export const Model:React.FC<ModelProps>=({
    title,
    discription,
    isopen,
    oncClose,
    children
})=>{
const onChange =(open:boolean)=>{
    if(!open){
        oncClose();
    }
}
return(
    <Dialog open ={isopen} onOpenChange={onChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                    {discription}
                </DialogDescription>
            </DialogHeader>
            <div>
                {children}
            </div>
        </DialogContent>
    </Dialog>
)
}
