import AddNote from './AddNote';
import Note from './Note';
import classes from './NotesList.module.css';

const NotesList = props => {
    return <>
        <div className={classes['notes-list']}>
            {props.notes.map(note => <Note note={note} id={note.id} key={note.id} onDeleteNote={props.onDeleteNote} />)}
            <AddNote onAddNewNote={props.onAddNote} />
        </div>
    </>
}

export default NotesList