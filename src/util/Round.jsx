import React from 'react'

function Round({children}) {
  return (
    <div className='relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-slate-200 rounded-full bg-zinc-400 hover:cursor-pointer'>
    {children}
    </div>
  )
}

export default Round
