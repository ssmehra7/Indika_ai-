import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { VscTasklist } from "react-icons/vsc";
import { GrTask } from "react-icons/gr";
import { HiDocumentSearch } from "react-icons/hi";
import { FaHeadphones } from "react-icons/fa";
import Logos from '../util/Logos';

function SecondaryNavbar() {
  return (
    <div className='flex justify-start gap-7'>
     
     <Logos  label={"Home"}>
        <MdHomeFilled/>
      </Logos>
      <Logos  label={"All Tasks"}>
        <IoDocumentText/>
      </Logos>
       
      <Logos  label={"Applied Tasks"}>
        <GrTask/>
      </Logos>
       
      <Logos  label={"Active Tasks"}>
        <VscTasklist/>
      </Logos>
       
      <Logos  label={"Training and Assessment"}>
        <HiDocumentSearch/>
      </Logos>
       
      <Logos  label={"Support"}>
        <FaHeadphones/>
      </Logos>
       
       
    </div>
  )
}

export default SecondaryNavbar
