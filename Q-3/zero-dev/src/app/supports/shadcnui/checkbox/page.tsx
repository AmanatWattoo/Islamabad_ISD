import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import React from 'react'

const Checkboxstyle = () => {
  return (
    <div>
        <div>
            <div>
             <Checkbox title='tick me' name='tick'/>   
            </div>
            <div>
                <Link href={'/'}>
                <Button>Home</Button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Checkboxstyle