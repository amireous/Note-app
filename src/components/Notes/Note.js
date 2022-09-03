import { MdDeleteForever } from 'react-icons/md'
import classes from './Note.module.css';

const Note = props => {
    const onDeleteNote = event => {
        props.onDeleteNote(props.note.id)
    }

    return (
        <div className={classes.note}>
            <p className={classes['note-title']}>{props.note.title}</p>
            <div className={classes['note-footer']}>
                <small>{props.note.date}</small>
                <span onClick={onDeleteNote}><MdDeleteForever className='delete-icon' size="1.2rem" /></span>
            </div>
        </div>
    )
}

export default Note;