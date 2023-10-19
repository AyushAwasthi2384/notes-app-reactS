import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit, MdSearch } from 'react-icons/md'


const Notes = ({search, notes, setNotes}) => {
    // const [notes, setNotes] = useState([]);

    const deleteNote = (id) => {
        setNotes(pre => pre.filter(p => p.id !== id));
    }

    const editNote = (id) => {
        //the edit operation will be performed here
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
        <div>
            <div className="notes-list">
                {notes.filter(n => n.txt.toLowerCase().includes(search.toLowerCase())).map((n) => (
                    <div key={n.id} className='note'>
                        <p>{n.txt}</p>
                        <p className="note-footer">{n.date} <MdDelete className='icon' onClick={() => deleteNote(n.id)} /> <MdEdit className='icon' onClick={() => editNote(n.id)} /> </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notes;
