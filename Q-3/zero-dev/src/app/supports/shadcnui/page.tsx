import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Shadcnui = () => {
  return (
    <div>
      <div>
        <Link href={"/supports/shadcnui/alert"}>
          <Button>Go to Alert</Button>
        </Link>
      </div>
    </div>
  )
}

export default Shadcnui