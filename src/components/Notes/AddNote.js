import * as uuid from 'uuid';

import { useState } from 'react';
import classes from './AddNote.module.css';

const AddNote = props => {
    const [noteTitle, setNoteTitle] = useState('');
    const characterLimit = 200;

    const changeHandler = event => {
        if ((characterLimit - event.target.value.length) >= 0) {
            setNoteTitle(event.target.value);
        }
    }

    const onSaveNote = event => {

        if (noteTitle.trim().length > 0) {
            const date = new Date().toLocaleDateString('en-US');
            const note = {
                title: noteTitle,
                date: date,
                id: uuid.v4()
            }
            props.onAddNewNote(note);
            setNoteTitle('');
        }
    }
    return (
        <div className={classes.note}>
            <textarea rows="8" cols="10" placeholder='Type to add a note...' onChange={changeHandler} value={noteTitle} />
            <div className={classes['note-footer']}>
                <small>{characterLimit - noteTitle.length} remaining</small>
                <button onClick={onSaveNote}>save</button>
            </div>
        </div>
    )
}

export default AddNote