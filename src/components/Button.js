import React from 'react'

const Button = ({name}) => {
  return (
    <button className='px-5 py-2 m-5 bg-gray-200 rounded-lg'>{name}</button>
  )
}

export default Button;

//https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]