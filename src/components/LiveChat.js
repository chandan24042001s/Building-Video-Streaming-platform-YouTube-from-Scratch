import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomString } from '../utils/helper';

const LiveChat = () => {
    const chatMessage=useSelector((store)=>store.chat.messages);
    //Live chat push

    const [livemsg,setLivemsg]=useState();
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
    <div className='w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
       {chatMessage.map((e,i)=>(
        <ChatMessage name={e.name}
            message={e.messages}/>
       ))}
    </div>
  )
}

export default LiveChat;