import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


const WatchPage = () => {
    const dispatch=useDispatch();
    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"));
    useEffect(()=>{
        dispatch(closeMenu());
    },[dispatch]);
  return (
    <div className='w-full'>
    <div className='flex px-5 w-full'><iframe width="850" height="550" 
    src={"https://www.youtube.com/embed/"+searchParams.get("v")}
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    <div className=' m-2 p-2 w-1/3 bg-gray-100'>
      <LiveChat/>
    </div>
    </div>

    <CommentsContainer/>
    </div>
  )
}

export default WatchPage;