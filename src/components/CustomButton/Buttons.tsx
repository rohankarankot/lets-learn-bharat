import React from 'react'

export const PrimaryBtn = ({children,className}:any) => {
  return (
    <button className={`py-3 px-7 text-sm font-medium text-white rounded-md bg-SurfieGreen ${className}`}>
      <span className='uppercase'>{children}</span>
    </button>
  )
}
export const SecondaryBtn = ({children,className}:any) => {
  return (
    <button className={`py-3 px-7 text-sm font-medium text-SurfieGreen rounded-md hover:bg-SurfieGreen hover:text-white transition-all border-SurfieGreen border-[1px] ${className}`}>
      <span className='uppercase'>{children}</span>
    </button>
  )
}
export const LinkBtn = ({children,className}:any) => {
  return (
    <div >
      <span className={` text-SurfieGreen border-b-[1px] border-SurfieGreen cursor-pointer hover:text-lg transition-all ${className}`}>{children}&rarr;</span>
    </div>
  )
}


