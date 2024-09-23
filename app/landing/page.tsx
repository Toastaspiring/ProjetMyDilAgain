import React from 'react'
import Link from 'next/link'

//landing page
const page = () => {
    const salleNumber = "hopla";
  return (
    <div className='bg-white w-full h-full'>
        <Link href={`/salle/${salleNumber}`} className='w-24 h-24 bg-blue-200'>Salle 001</Link>
    </div>
  )
}

export default page