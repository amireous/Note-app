import Header from './components/Header/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import Note from './components/Notes/Note';
import NotesList from './components/Notes/NotesList';
import { useState } from 'react';

import * as uuid from 'uuid'

const DUMMY_NOTES = [
  {
    title: 'Do homeworks',
    date: '02/08/2022',
    id: uuid.v4()
  },
  {
    title: 'Go to the gym',
    date: '10/08/2022',
    id: uuid.v4()
  }
];

function App() {
  const [notesList, setNotesList] = useState(DUMMY_NOTES);
  const [searchedText, setSearchedText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredNotes = notesList.filter(note => note.title.toLowerCase().includes(searchedText));

  const toggleDarkModeHandler = () => {
    setIsDarkMode(prevMode => prevMode = !prevMode);
  }

  const addNewNote = note => {
    setNotesList(prevNotes => [note, ...prevNotes]);
  }

  const deleteNote = noteID => {
    setNotesList(prevNotes => {
      const newList = prevNotes.filter(note => note.id !== noteID);
      return newList
    })
  }

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='app-container'>
        <Header isDarkMode={isDarkMode} toggleMode={toggleDarkModeHandler} />
        <SearchBar onSearch={setSearchedText} />
        <NotesList notes={filteredNotes} onAddNote={addNewNote} onDeleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
