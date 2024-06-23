import React from 'react'
import Recieve from './Recieve'
import Send from './Send'

function Chat() {
  return (
    <div className='overflow-y-auto'>
        
        <div className=''>

        <div className='flex justify-start items-center'>
        <Send/>
        </div>
        <div className='flex justify-start items-center'>
        <Send/>
        </div>


        <div className='flex justify-end items-center'>
        <Recieve/>
        </div>
        <div className='flex justify-start items-center'>
        <Send/>
        </div>

        <div className='flex justify-end items-center'>
        <Recieve/>
        </div>
        <div className='flex justify-start items-center'>
        <Send/>
        </div>
        <div className='flex justify-start items-center'>
        <Send/>
        </div>
        <div className='flex justify-start items-center'>
        <Send/>
        </div>


        </div>
    </div>
  )
}

export default Chat
