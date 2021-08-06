import React, { useState } from 'react';

const SearchImage = ({ searchtext }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchtext(text);
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
    <form onSubmit={onSubmit} className="w-full max-w-sm">
      <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
      <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
      <button className="flex-shrink-0 bg-blue-100 font-semibold text-black hover:bg-green-300 border-green-400 hover:border-indigo-200 text-sm border-4 text-black py-1 px-2 rounded" type="submit">
    Search
    </button>
    </div>
    </form>
      </div>
  )
}

export default SearchImage;