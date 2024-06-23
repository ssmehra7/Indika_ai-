import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { LuCircleDashed } from 'react-icons/lu';

function MessageCard({ username, projects, message,read }) {
    
    
  return (
    <div className='px-3 py-2'>
      <div className='flex justify-between'>
        <div className='font-semibold'>{username}</div>
        <div>1h</div>
      </div>
      {!read?<div className='font-bold'>{message}</div>:<div>{message}</div>}
      

      <div className='flex gap-1 flex-col'>
        {projects.map((project, index) => (
          <div className='flex gap-1 bg-blue-300 justify-start items-center' key={index}>
            <div>
              {project.status === "Applied" && <div className='text-blue-700'> <LuCircleDashed /> </div>}
              {project.status === "Completed" && <div className='text-green-600'><FaCheckCircle /></div>}
            </div>
            <div>{project.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageCard;
