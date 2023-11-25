import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';


const WatchPage = () => {
    const dispatch=useDispatch();
    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"));
    useEffect(()=>{
        dispatch(closeMenu());
    },[dispatch]);
  return (
    <div className='w-[950px]'>
    <div><iframe width="850" height="500" 
    src={"https://www.youtube.com/embed/"+searchParams.get("v")}
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage;