import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SUGGESTION_API } from "../utils/contants";
import {user, youtube_icon, hamburger_menu} from '../utils/contants';

import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false);
  const searchCache=useSelector((store)=>store.Search)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(searchQuery);

    const timer = setTimeout(() =>{

      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
        console.log(suggestions);
      }
      else{
        getSearchSuggestions()

      }
     }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("APICALL" + searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1]);

    // update cache in slice store 
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 my-2 cursor-pointer"
          alt="Humbergicon"
          src={hamburger_menu}
        />
        <a href="/">
          <img
            className="h-11 mx-3 "
            alt="Logo"
            src={ youtube_icon}
          />
        </a>
      </div>
      <div className="col-span-10 px-10 ">
        <div>
          <input
            className="w-1/2  border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Type to Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={()=>setShowSuggestion(true)}
            onScroll={()=>setShowSuggestion(false)}
            onBlur={()=>setShowSuggestion(false)}
            
            onScrollCapture={()=>setShowSuggestion(false)}
          
          />
          <button className="border border-gray-400 rounded-r-full px-5 py-2 bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestion && (<div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border-gray-100 ">
        <ul>
            {
                suggestions.map((s)=>(
                    <li key={s} className="py-2 shadow-sm hover:bg-gray-100">🔍{s}</li>
                ))
            }
        </ul>
      </div>)}
      </div>
      
      <div className="col-span-1 ">
        <img
          className="h-12"
          alt="user"
          src={user}
        />
      </div>
    </div>
  );
};

export default Head;
