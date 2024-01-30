import React from 'react'
import styles from "./style.module.css"
import Link from 'next/link'
import Navigation from '../navigation/Index'
import SearchBar from '../SearchBar/Index'
import Image from 'next/image'




const Header = () => {
  return (

    <>    
{/* header */}
    <header>
       <div className="container">
      <nav className={styles.navigation}>

        <div className='logo'>
          <Link href="/"><Image src="/logo.png" alt="logo" width={170} height={20} /> </Link> </div>
        <div className='navbar'><Navigation />  </div>
        <SearchBar />

      </nav>
</div>
    </header>

    </>

  )
}

export default Header