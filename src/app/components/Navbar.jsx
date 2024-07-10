import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <ul className='flex md:flex-row flex-col justify-evenly md:h-[80px] h-screen bg-orange-400 items-center text-white font-semibold'>

            <li>
                <Link href='/'><Image src='/Task.png' alt="Icon" width={60} height={60}/></Link>
            </li>

            <li>
                <Link href='/'>Home</Link>
            </li>

            <li>
                <Link href='/about'>About</Link>
            </li>

            <li>
                <Link href='/contact'>Contact</Link>
            </li>

            <li>
                <Link href='/getstarted' className='bg-slate-900 rounded-md py-2 px-4 shadow-lg text-center text-white'>Get Started</Link>
            </li>
        </ul>


    </nav>
  )
}
