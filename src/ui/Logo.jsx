import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
   <Link to = '/'> <img src="./logo.png" alt="Majid Ali" className='w-12 sm:w-16 md:w-16' /></Link>

  )
}
