import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'


const Acdn = () => {
  return (
    <div className='flex items-center justify-center py-[10rem] bg-gradient-to-tl from-pink-600 to-red-400 h-screen' >
        <div className='bg-black/[0.05] w-[30rem] font-label text-2xl rounded-lg  flex flex-col items-center justify-center'>
            <p className='font-heading font-semibold text-2xl'>This is an Accordien</p>
            <Accordion type='single' collapsible color='green'>
                <AccordionItem value='item-1' >
                <AccordionTrigger>
                  Is it fetchable
                </AccordionTrigger>
                <AccordionContent>
                  this is  content of Accordion
                </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div>this is multiple accordion</div>
        <Accordion type='multiple' aria-autocomplete='list'>
          <AccordionItem value='items'>
            <AccordionTrigger>Pick up available options</AccordionTrigger>
            <AccordionContent>This is the first item</AccordionContent>
            <AccordionContent>This is the Second item</AccordionContent>
            <AccordionContent>This is the Third item</AccordionContent>
            <AccordionContent>This is the Fourth item</AccordionContent>
          </AccordionItem>
          <AccordionItem value='items'>
            <AccordionTrigger>Check</AccordionTrigger>
            <AccordionContent>Tick the items</AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className='py-4 flex justify-center items-center'>
            <Link href={'/'}>
            <Button>Home</Button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Acdn