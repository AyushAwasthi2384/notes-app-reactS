import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";


const Popup = ({ note, setNote, setNotes }) => {
    // const [note, setNote] = useState("");
    // const [notes, setNotes] = useState([]);


    const addNote = () => {
        if (note.trim()) {
            const dat = { id: crypto.randomUUID(), txt: note.trim(), date: new Date().toLocaleDateString() };
            setNotes(pre => [...pre, dat]);
            setNote("");
        }
    }

    const close_popup = () => {
        document.querySelector(".add-popup").style = "top:160vh;"
    }

    return (
        <div>
            <div className="add-popup">
                <button className='rem-p' onClick={close_popup}> <RxCross1 className='add-icon' /> </button>

                <div className="note note-add">
                    <textarea className='txt-note' value={note} onChange={(e) => setNote(e.target.value)} placeholder='Write your note here'></textarea>
                    <div>
                        <span>{note.trim().length}/200</span>
                    </div>
                </div>
                <button type='submit' className="save-button" onClick={addNote}>save</button>
            </div>
        </div>
    );
}

export default Popup;
