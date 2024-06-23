import React from 'react';
import { CiShare1 } from 'react-icons/ci';
import { FaCheckCircle } from 'react-icons/fa';
import { LuCircleDashed } from 'react-icons/lu';

function ProjectView({ title, status }) {
  return (
    <div>

      <div className='flex flex-col  bg-gray-300'>
        <div className="flex justify-between items-center px-1 rounded-sm">
          <div>{title}</div>
          <button className={`rounded-sm border-2 px-4 py-2 border-blue-950 font-semibold flex gap-1 justify-center items-center`}>
            <div>View</div>
            <div><CiShare1 /></div>
          </button>
        </div>

        <div className='pb-1 pl-3'>
            {status === "Applied" &&<div className='flex items-center justify-start bg-blue bg-blue-300 w-fit rounded-sm'>
              <div className='text-blue-700'> <LuCircleDashed /> </div>
              <div className="text-sm w-fit px-2 py-1 rounded-sm font-semibold">Applied</div>
            </div> }
            {status === "Completed" && <div className='flex items-center justify-start bg-blue bg-green-600 w-fit rounded-sm px-2 '>
              <div className='text-white '> <FaCheckCircle /> </div>
              <div className="text-sm w-fit px-2 py-1 rounded-sm text-white font-semibold">Completed</div>
            </div>}
          </div>

      </div>

    </div>

  );
}

export default ProjectView;
