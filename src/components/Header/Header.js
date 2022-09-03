import { useState } from 'react';
import classes from './Header.module.css';

const Header = props => {
    const handleDarkMode = () => props.toggleMode();
    return (
        <>
            <header className={`${classes.header} ${props.isDarkMode ? classes['dark-mode'] : ''}`}>
                <h1>Notes</h1>
                <button type='button' className={classes['toggle-button']} onClick={handleDarkMode}>Toggle mode</button>
            </header>
        </>
    )
}

export default Header;