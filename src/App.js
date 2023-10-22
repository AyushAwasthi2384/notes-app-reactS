import './App.css';
import { useState, useEffect, createContext, useMemo } from 'react';
// import { MdDelete, MdEdit, MdSearch } from 'react-icons/md'
import { BsPlusLg } from "react-icons/bs";
import Search from './Components/Search';
import Popup from './Components/Popup';
import Notes from './Components/Notes';

export const NoteInfo = createContext(null)

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const popup = () => {
    document.querySelector(".add-popup").style = "top:50vh;"
  }

  const addNote = () => {
    if (note?.trim()) {
        const dat = { id: crypto.randomUUID(), title:title?.trim(), txt: note?.trim(), date: new Date().toLocaleDateString() };
        setNotes(pre => [...pre, dat]);
        setNote("");
        setTitle("")
    }
}

  const updateNote = (id, edited) => {
    // setNotes(pre => pre.map(p => p.id === id ? { ...p, text: edited } : p))

    const _notes = Array.from(notes);
    const index = _notes.findIndex(n => n.id === id);
    _notes[index].txt = edited;
    setNotes(_notes); 
  };
  console.log(notes)
  const deleteNote = (id) => {
    setNotes(pre => pre.filter(p => p.id !== id));
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

  const value = useMemo(() => ({ notes, setNotes, note, setNote, search, setSearch, updateNote, deleteNote, addNote, title, setTitle }), [notes, setNotes, note, setNote, search, setSearch, updateNote, deleteNote, addNote, title, setTitle])

  return (
    <div className="App">
      <div className="notes-app">
        <NoteInfo.Provider value={value}>
          <Search />
          <Notes />
          <Popup />
        </NoteInfo.Provider>
        <button className='add-p' onClick={popup}> <BsPlusLg className='add-icon' /> </button>
      </div>
    </div>
  );
}

export default App;
