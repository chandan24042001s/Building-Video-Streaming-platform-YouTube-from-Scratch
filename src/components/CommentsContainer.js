
import React from 'react'
import { CommentData } from '../utils/contants';
import {user} from '../utils/contants';

const Comment=({data})=>{
    const {name,text}=data;

    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
            <img 
            alt="user" 
            src={user}
            className='w-12 h-12' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
    }

const CommentsList=(({comments})=>{
    return comments.map((comment,index)=>(
        <>
        <Comment key={index} data={comment} />
        <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies} />
        </div>
        </>
    ))
})

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 '>
        <h1 className='text-3xl font-bold'> Comments :</h1>
        <CommentsList comments={CommentData} />
    </div>
  )
}

export default CommentsContainer