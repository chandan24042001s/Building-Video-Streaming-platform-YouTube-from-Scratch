import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomString } from '../utils/helper';

const LiveChat = () => {
    const chatMessage=useSelector((store)=>store.chat.messages);
    //Live chat push

    const [liveMessage,setLiveMessage]=useState();
    const dispatch=useDispatch();


    useEffect(()=>{
        const i=setInterval(()=>{
            //Api polling

            dispatch(
                addMessage(
                    {
                        name:generateRandomName(),
                        messages:generateRandomString(20)
                    }
                )
            )
            console.log("API Polling")
        },2000);
        return ()=>clearInterval(i);
    },[]);

  return (
    <>
    <div className='w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
       {chatMessage.map((e,i)=>(
        <ChatMessage name={e.name}
            message={e.messages}/>
       ))}
    </div>
    <form 
   className='w-full p-2 ml-2 border border-black'
   onSubmit={(e)=>{
    e.preventDefault();
    dispatch(addMessage({
        name:"Chandan",
        message:liveMessage
    }))
   }}
   >
    <input
    className='px-2 w-92 h-8'
     type='text' 
     placeholder='Type to Chat'
     value={liveMessage}
     onChange={(e)=>{
        setLiveMessage(e.target.value)
     }}
     />
     <button className='px-2 mx-2 bg-green-100'>Send🐱‍👓</button>
   </form>
    </>
  )
}

export default LiveChat;