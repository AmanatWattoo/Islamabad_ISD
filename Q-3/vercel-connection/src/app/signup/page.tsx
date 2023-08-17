import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <div>
            <div>
                Signin
            </div>
            <div>
                <Link href={"/signup"}>Signup</Link>
            </div>
        </div>

    </div>
  )
}

export default Signup