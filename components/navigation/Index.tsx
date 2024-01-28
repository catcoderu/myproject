"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./style.module.css"
import { usePathname } from 'next/navigation';

const links = [
    {id:0,to:'/',title:'About'},
    {id:1,to:'/Menu',title:'Menu'},
    {id:2,to:'/Beverages',title:'Beverages'},
    {id:3,to:'/Delivery',title:'Delivery'},
    {id:4,to:'/Contact us',title:'Contact us'},
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