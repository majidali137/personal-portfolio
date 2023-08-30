import React from 'react'

export default function Button({children}) {
  return (
    <div className='rounded-full bg-blue-500  px-2 py-1 sm:py-3 sm:px-8 sm:bold text-white'>
      {children}
    </div>
  )
}
