import { MdSearch } from 'react-icons/md'
import classes from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
    const searchHandler = event => {
        onSearch(event.target.value)
    }
    return (
        <div className={classes.search}>
            <span className={classes['search-icon']}><MdSearch className="search-icons" size='1.3rem' /></span>
            <input onChange={searchHandler} className={classes['search-bar']} type='text' placeholder='type to search...' />
        </div>
    )
}

export default SearchBar;