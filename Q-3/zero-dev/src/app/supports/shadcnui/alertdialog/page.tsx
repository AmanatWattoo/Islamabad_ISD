import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AlerDialog = () => {
  return (
    <div className="flex flex-col bg-gradient-to-bl to-pink-400 from-pink-700 h-screen">
      <div
        className="flex  ml-[20rem]  rounded-full flex-col justify-center items-center py-10 mt-[10rem] bg-gradient-to-t to-red-600
         w-[35rem] from-pink-500 "
      >
        <div className="py-4 font-heading text-2xl hover:text-blue-800 text-black">
          <AlertDialog>
            <AlertDialogTrigger>Open</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <Link href={"/"}>
          <Button>Go to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default AlerDialog;
