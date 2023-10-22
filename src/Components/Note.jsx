import React, { useContext, useState } from 'react';
import { MdDelete, MdDone, MdEdit, MdSearch } from 'react-icons/md'
import { NoteInfo } from '../App';

const Note = ({ text, date, delfn, id, title }) => {
    const { updateNote } = useContext(NoteInfo);


    const [edit, setEdit] = useState(false)
    const [edited, setEdited] = useState(text);

    const saveNote = () => {
        setEdit(false);
        updateNote(id, edited);
    }


    return (
        <div>
            <div className='note'>
                <p className='note-title'><span className='title-head'>Title:</span> {title}</p>
                {
                    edit ?
                        <form>
                            <textarea className='input-note' type='text' value={edited} onChange={(e) => { setEdited(e.target.value) }}></textarea>
                            {/* <button onClick={saveNote}>save</button> */}
                        </form>
                        : <p className='note-content'>{edited}</p>
                }
                <p className="note-footer">
                    {date}
                    <span>
                        <MdDelete className='icon' onClick={() => delfn(id)} />
                        {
                            !edit ?
                                <MdEdit className='icon' onClick={() => setEdit(true)} />
                                : <MdDone className='icon' onClick={saveNote} />
                        }
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Note;
