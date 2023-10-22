import React, { useContext, useState } from 'react';
import { MdSearch } from 'react-icons/md'
import { NoteInfo } from '../App';


const Search = () => {
    const {search, setSearch} = useContext(NoteInfo);
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
