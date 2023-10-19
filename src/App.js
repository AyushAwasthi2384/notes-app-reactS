import './App.css';
import { useState, useEffect } from 'react';
// import { MdDelete, MdEdit, MdSearch } from 'react-icons/md'
import { BsPlusLg } from "react-icons/bs";
import Search from './Components/Search';
import Popup from './Components/Popup';
import Notes from './Components/Notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [search, setSearch] = useState("");

  const popup = () => {
    document.querySelector(".add-popup").style = "top:50vh;"
  }


  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes-app", JSON.stringify(notes));
    }
  }, [notes])

  useEffect(() => {
    const n = localStorage.getItem("notes-app");
    if (n) setNotes(JSON.parse(n));
  }, [])


  return (
    <div className="App">
      <div className="notes-app">
        <Search setSearch={setSearch} />
        <Notes search={search} notes={notes} setNotes={setNotes}/>
        <Popup note={note} setNotes={setNotes} setNote={setNote}/>
        <button className='add-p' onClick={popup}> <BsPlusLg className='add-icon' /> </button>
      </div>
    </div>
  );
}

export default App;
