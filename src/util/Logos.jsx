import React from 'react'

function Logos({children,label}) {
  return (
    <div>
      <div className='flex gap-1 justify-center items-center text-base hover:cursor-pointer'>
        <div>
            {children}
        </div>
        <div>
            {label}
        </div>

      </div>
    </div>
  )
}

export default Logos
