// SearchBox.jsx
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from "./SearchBox.module.css";
import { getFilter, filterNumbers } from "../../redux/filterSlice";


const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(filterNumbers(e.target.value.trim()));

  const value = useSelector(getFilter);
  
    return (
      <>
        <label className={css.searchtitle}> Find contacts by name:</label>
        <input
          className={css.searchinput}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search contacts..."
        />
      </>
    );
  };


export default SearchBox;
