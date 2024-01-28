"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./style.module.css"
import { usePathname } from 'next/navigation';

const links = [
    {id:0,to:'/',title:'Ana səhifə'},
    {id:1,to:'/Kateqoriya',title:'Kateqoriya'},
    {id:2,to:'/Mağaza',title:'Mağaza'},
    {id:3,to:'/Blog',title:'Blog'},
    {id:4,to:'/Səhifə ',title:'Səhifə '},
];


const Navigation = () => {
    const pathname=usePathname();
  return (
    <div className='container'>
    <nav className={styles.navigation}>
       
   <div className={styles.links}>
   { links.map(({id,to,title})=>{
            return (
            <Link className={pathname === to ? 'active' : ''} href={to} key={id}>
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