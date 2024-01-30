import React from 'react'
import { CiSearch } from "react-icons/ci";
import styles from "./style.module.css"
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const SearchBar = () => {
  return (
    <form >
      <div className={styles.search}>
        <input className={styles.searchbar} type="search" placeholder='Bura yazın' />
        <button className={styles.btn}><CiSearch /></button>
        <button className={styles.personbtn}><IoPersonOutline /></button>
        <button className={styles.shopbtn}><FiShoppingCart /></button>
        </div>
        
    </form>
    
  );
}

export default SearchBar