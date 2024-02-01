   "use client"
import Link from 'next/link'
import React from 'react'
import styles from "./style.module.css"
import { usePathname } from 'next/navigation';

const links = [
    {id:0,to:'/',title:'meyvələr'},
    {id:1,to:'/tərəvəzlər',title:'tərəvəzlər'},
    {id:2,to:'/yemeklər',title:'yemeklər'},
    {id:3,to:'/süd',title:'süd'},
    {id:4,to:'/tortlar ',title:'tortlar '},
    {id:5,to:'/içkilər ',title:'içkilər '},
];


const Navigation = () => {
    const pathname=usePathname();
    console.log(pathname);
    
  return (
    <div className='container'>
    <nav className={styles.navigation}>
       
   <div className={styles.links}>
   { links.map(({id,to,title})=>{
            return (
            <Link className={pathname === to ? 'activeNav' : 'nav'} href={to} key={id}>
                {title}
                </Link>
                );
        
        })}
</div>
   </nav>
   </div> 
  );
   

    
};

export default Navigation