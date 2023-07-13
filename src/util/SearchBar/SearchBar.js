import './SearchBar.css';
import { useContext } from "react";
import { MeetupContext } from "../../contexts/MeetupContext";
import { CrossIcon2, SearchIcon } from "../../components/Icons";

const SearchBar = (props) => {
    const { placeholder } = props;

    const { searchList, setSearchList } = useContext(MeetupContext);
    
    const inputChangeHandler = (event) => {
        setSearchList(event.target.value);        
    }

    const clearHandler = () => {
        setSearchList("");
    }

    return <>
        <div className="searchBar">
            <div className="searchInputs">
                
            {searchList.length === 0 && <SearchIcon className={"searchIcon"} />}
            {searchList.length > 0 && <CrossIcon2 onClick={clearHandler} className={"searchIcon"} />}
                <input type="text" className="searchInput" value={searchList} placeholder={placeholder} onChange={inputChangeHandler}/>
            </div>
        </div>
    </>
}

export default SearchBar;
