import React from 'react'
import { CiSearch } from "react-icons/ci";
import styles from "./style.module.css"

const SearchBar = () => {
  return (
    <form >
      <div className={styles.search}>
      <input className='{styles.searchbar}' type="search" placeholder='Bura yazın' />
      <button className='{styles.btn}'><CiSearch /></button></div>
    </form>
  );
}

export default SearchBar