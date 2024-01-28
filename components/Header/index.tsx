import React from 'react'
import styles from "./style.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../navigation/Index'




const Header = () => {
  return (
  
 <>       <div className="container">
 <div className={styles.navigation}>

<div className='logo'><Link href="/">
<Image src="/logo.png" alt="logo" width={130} height={33}  /> </Link> </div>
<div className='navbar'><Navigation/> </div>

</div>

<h1 className={styles.title}>Mükəmməl <span>Səhər Yeməyi</span> üçün Sizə Lazım Olan Hər şey </h1>
</div>

</>
    
  )
}

export default Header