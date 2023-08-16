import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Accordian = () => {
  return (
    <div>Accordian
      <Link href={"/shadcnui"}>
      <Button>Go to shadcnui</Button>
      </Link>
    </div>
  )
}

export default Accordian