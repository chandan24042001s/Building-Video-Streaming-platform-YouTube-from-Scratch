import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  //Early Return
  if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">

      <ul>
        <li className='font-bold py-3'><Link to='/'>Home</Link> </li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-2 py-3" >Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
     < h1 className="font-bold pt-8" >Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
};

export default Sidebar;