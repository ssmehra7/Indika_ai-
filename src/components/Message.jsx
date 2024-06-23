import React, { useEffect, useState } from 'react';
import MessageNavbar from './MessageNavbar';
import AllMessage from './AllMessage';
import ViewMessage from './ViewMessage';
import { recieverMessageData } from '../config';
import { useSelector } from 'react-redux';
import { IoIosSend } from "react-icons/io";

function Message() {
  const [data, setData] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  useEffect(() => {
    //some api call 
    setData(recieverMessageData);
  }, []);

  function handleInput() {
    //error handling
    if (!chatInput) {
      setErrorInput(true);
    } else {
      setErrorInput(false);
    }
  }

  const unread = useSelector((state) => state.unread.value);
  console.log(unread);

  // Filter unread messages
  const filterData = data.filter(message => !message.Read);

  return (
    <div className='border rounded-md border-slate-300'>
      <div className='border-b-2'>
        <div className='mx-5 mt-3'>
          <MessageNavbar />
        </div>
      </div>

      <div className='grid grid-cols-10 h-[450px]'>
        <div className='col-span-3 border-r bg-gray-300 overflow-y-scroll'>
          {unread ? <AllMessage data={filterData} /> : <AllMessage data={data} />}
        </div>
        <div className='col-span-7 overflow-y-auto'>
          {data.length > 0 && <ViewMessage data={data[0]} />}
        </div>
      </div>

      <div className='flex justify-end  items-center sticky bottom-0 bg-white p-3'>
        <div className='flex gap-2 items-center border border-black bg-slate-100 rounded-lg px-2 w-full max-w-xl'>
          <input
            onChange={(e) => {
              setChatInput(e.target.value);
            }}
            placeholder='Write your message'
            className='rounded-lg px-2 bg-slate-100 outline-none h-10 w-full'
          />
          <button onClick={handleInput}><IoIosSend /></button>
        </div>
      </div>

      {errorInput && (
        <div className='flex justify-center bg-red-500 rounded-md w-fit m-2'>
          <div className='text-white px-4 py-2'>No input</div>
        </div>
      )}
    </div>
  );
}

export default Message;
