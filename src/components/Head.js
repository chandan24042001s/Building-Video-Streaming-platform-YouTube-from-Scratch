import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SUGGESTION_API } from "../utils/contants";
import store from "../utils/store";
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
          className="h-8 cursor-pointer"
          alt="Humbergicon"
          src="data:image/png;base64,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"
        />
        <a href="/">
          <img
            className="h-11 mx-3 "
            alt="Logo"
            src="data:image/png;base64,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"
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
          className="h-8"
          alt="user"
          src="data:image/jpeg;base64,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"
        />
      </div>
    </div>
  );
};

export default Head;
