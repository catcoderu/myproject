import React from 'react'
import styles from "./style.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../navigation/Index'
import SearchBar from '../SearchBar/Index'




const Header = () => {
  return (
  
 <>       <div className="container">
 <div className={styles.navigation}>

<div className='logo'>
  <Link href="/"><Image src="/logo.png" alt="logo" width={130} height={33}  /> </Link> </div>
<div className='navbar'><Navigation/>  </div>
<SearchBar/>

</div>
<div className={styles.content}>
<h1 className={styles.title}>Mükəmməl <span>Səhər Yeməyi</span> üçün Sizə Lazım Olan Hər şey </h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti .</p>
<button className={styles.button}>INDI ALMAQ</button>
<button className={styles.button}>DAHA ƏTRAFLI</button>
<div className={styles.bannerImage}> <Image src="/sushi.png" alt="sushi" width={550} height={500}  /></div>


</div>

</div>
</>

    
  )
}

export default Header