// import React, { useState } from 'react'

// const SearchBox = () => {
//     const [isSearchVisible,setIsSearchVisible] =useState(false)

//     const toggleSearch = () => {
//         setIsSearchVisible(!isSearchVisible);
//       };
//   return (
//     <div>
//         <div className={`${isSearchVisible ? "flex" : "hidden"} bg-gray-50 px-10 justify-center items-center py-6`}>
//         <div className="flex items-center md:w-1/2 gap-4">
//           <div className="m-auto border flex w-full items-center border-gray-400 rounded-3xl">
//             <input
//               type="search"
//               placeholder="Search"
//               className="text-gray-400 w-full h-10 px-5 py-1 focus:outline-none focus:ring-0 focus:border-transparent"
//             />
//             <img 
//             onClick={toggleSearch}
//               className="h-4 px-6"
//               src="/src/assets/frontend_assets/search_icon.png"
//               alt=""
//             />
//           </div>
//           <img 
//             className="h-4 cursor-pointer"
//             src="/src/assets/frontend_assets/cross_icon.png"
//             alt=""
//             onClick={() => setIsSearchVisible(false)}
//           />   
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SearchBox


import React, { useEffect, useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBox = () => {

  const {search,setSearch,showSearch,setShowSearch} =useShop()
  const [visible,setVisible] = useState(false)

  const location = useLocation()//set searchbox on page where bitton clicked

  useEffect(()=>{
    if(location.pathname.includes('Collection'))
      setVisible(true)

    
    else{
      setVisible(false)
    }
  },[location])
  return  showSearch  && visible ? (
      <div className={`border-t border-b border-gray-200 bg-gray-50 text-center`}>
          <div className=" inline-flex  justify-center items-center border border-gray-400  px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input
              onChange={(e)=>setSearch(e.target.value)}
              value={search}
              placeholder="Search"
              // className="text-gray-400 w-full h-10 px-5 py-1 focus:outline-none focus:ring-0 focus:border-transparent"
              className='flex-1 outline-none bg-inherit text-sm'
            />
            <img 
              className="h-4 px-6"
              src="/src/assets/frontend_assets/search_icon.png"
              alt=""
            />
          </div>
          <img 
            className="w-3 cursor-pointer inline"
            src="/src/assets/frontend_assets/cross_icon.png"
            alt=""
            onClick={()=>setShowSearch(false)}
          />   
        </div>
  ): null;
};

export default SearchBox;
