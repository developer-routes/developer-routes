import React from 'react'
import logo from './../../assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}

function NavBar({}: Props) {
  const navList = [
    {
      title:"About",
      path:'/about'
    }, 
    {
      title:"Blogs",
      path:'/blogs'
    },  
    {
      title:"Team",
      path:'/team'

    },
    {
      title:"LeaderBoard"
    }
  ]
  return (
    <header className='border-2 rounded-full flex m-5 justify-between px-5 '>
      <div className='m-2 order-first'>
         <Image
          src={logo}
          height={50}
          width={200}
          alt='Developer Routes Logo'
         />
      </div>
      <nav className='order-last'>
        <ul className='flex p-3'>
          {navList.map(item=>(
            <Link href={`${item.path}`} className='p-2'>{item.title}</Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar