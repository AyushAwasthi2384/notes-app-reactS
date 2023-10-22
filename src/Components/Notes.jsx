import React, { useContext, useEffect } from 'react';
// import { MdDelete, MdEdit, MdSearch } from 'react-icons/md'
import { NoteInfo } from "../App";
import Note from './Note';

const Notes = () => {
    const { search, notes, setNotes, deleteNote } = useContext(NoteInfo)
    // const [notes, setNotes] = useState([]);

    // const editNote2 = (e) => {
    // }

    // useEffect(() => {
    //     if (notes.length > 0) {
    //         localStorage.setItem("notes-app", JSON.stringify(notes));
    //     }
    // }, [notes])

    // useEffect(() => {
    //     const n = localStorage.getItem("notes-app");
    //     if (n) setNotes(JSON.parse(n));
    // }, [])

    return (
        <div>
            <div className="notes-list">
                {notes.filter(n => n.txt.toLowerCase().includes(search.toLowerCase()) || n.title.toLowerCase().includes(search.toLowerCase())).map((n) => (
                    <Note key={n.id} id={n.id} title={n.title} text={n.txt} date={n.date} delfn={() => deleteNote(n.id)} />

                ))}
            </div>
        </div>
    );
}

export default Notes;
