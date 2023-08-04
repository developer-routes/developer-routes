import React from 'react'

type Props = {
    title :String
}

function Navbar({title}: Props) {
  return (
    <div className='text-bold text-[48px]' >{title}</div>
  )
}

export default Navbar