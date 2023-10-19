import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md'


const Search = ({search, setSearch}) => {

    return (
        <div>
            <div className="search">
                <input placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                <button className='s-btn'><MdSearch /></button>
            </div>
        </div>
    );
}

export default Search;
