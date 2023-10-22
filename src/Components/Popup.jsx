import React, { useContext } from 'react';
import { RxCross1 } from "react-icons/rx";
import { NoteInfo } from '../App';


const Popup = () => {
    const { note, setNote, addNote, title, setTitle } = useContext(NoteInfo)
    // const [note, setNote] = useState("");
    // const [notes, setNotes] = useState([]);

    const close_popup = () => {
        document.querySelector(".add-popup").style = "top:160vh;"
    }

    return (
        <div>
            <div className="add-popup">
                <button className='rem-p' onClick={close_popup}> <RxCross1 className='add-icon' /> </button>

                <div className="note-add">
                    <input className='title-note' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' type="text" />
                    <textarea className='txt-note' value={note} onChange={(e) => setNote(e.target.value)} placeholder='Write your note here'></textarea>
                    <div style={{width: "100%"}}>
                        <span>{note?.trim().length}/200</span>
                    </div>
                </div>
                <button type='submit' className="save-button" onClick={addNote}>Save</button>
            </div>
        </div>
    );
}

export default Popup;
