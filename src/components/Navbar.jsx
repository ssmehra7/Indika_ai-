import React from 'react'
import { BiMessageDetail } from "react-icons/bi";
import { BsBellFill, BsFillBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Round from '../util/Round';
function Navbar() {
  return (
    <div className='flex justify-between items-center '>
      <div>
        <div className='text-2xl font-bold'>Fle<span className='text-orange-600'>X</span>iBench</div>
        <div className='flex justify-end -mt-3'>
        <div className='text-zinc-400 font-bold'>
        <span className='text-[0.55rem] '>By </span><span className='text-xs'>INDIKA AI</span>
        </div>
        </div>
        
      </div>
      <div className='flex justify-center items-center gap-4 '>
        <Round>
            <BiMessageDetail/>
        </Round>

        <Round>

        <BsFillBellFill/>
        </Round>
        <Round>

        <FaUser/>
        </Round>
        <div className='font-semibold hover:cursor-pointer'>
        Roy Paul
        </div>
      </div>
    </div>
  )
}

export default Navbar
