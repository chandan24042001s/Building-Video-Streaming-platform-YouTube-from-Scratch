import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,localized,thumbnails}=snippet;
    const{title}=localized;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' alt='Thumbnails' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2' >{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
     
    </div>
  )
}

export default VideoCard;