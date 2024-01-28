import React from 'react'
import styles from "./style.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../navigation/Index'




const Header = () => {
  return (
  
 <>       <div className="container">
 <div className={styles.navigation}>
<div >

<Link href="/">
<Image src="/logo.png" alt="logo" width={164} height={53}/>
</Link>
</div>
<div>
<Link href="tel:+1 (816) 482 1513" className={styles.phoneNumber}> 
+1 (816) 482 1513</Link>
</div>
</div>

<h1 className={styles.title}>Mükəmməl <span>Səhər Yeməyi</span> üçün Sizə Lazım Olan Hər şey </h1>
</div>
<Navigation/>
</>
    
  )
}

export default Header