import React from 'react';
import MessageCard from "./MessageCard";

function AllMessage({ data }) {
  return (
    <div className='hover:cursor-pointer'>
      {data.map((message,index) => (
        <div className="border-b-2" key={index}>
          <MessageCard
            username= {message.reciever}
            projects= {message.ProjectList}
            message= {message.latestMessage}
            read = {message.Read}
          />
        </div>
      ))}
    </div>
  );
}

export default AllMessage;