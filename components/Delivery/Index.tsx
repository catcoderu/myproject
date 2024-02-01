import React from 'react'
import styles from "./Styles.module.css"
import Image from 'next/image'
import { MdOutlineFileDownloadDone } from "react-icons/md";

const FreshBeef = () => {
  return (
    <div>
        <section className={styles.hero}>
                <div className="container">
                    <div className={styles.content}>
                <div className={styles.bannerImage}> <Image src="/Beef.png" alt="Beef" width={550} height={500} /></div>
                        <div className={styles.hero_left}>
                            <h1 className={styles.title}> Birbaşa Qapınıza Pulsuz Çatdırılma</h1>
                            <p >There are many variations of passage Lorem Ipsum available, but te majority hav suffered alteration in some form, by injected humour</p>
                            <p> <MdOutlineFileDownloadDone />Free Delivery For All <MdOutlineFileDownloadDone />Order Only Fresh Food</p>
                            <button className={styles.button}>INDI TAPMAQ</button>
                           
                            
                        </div>
                    </div>

                </div>
                      
            </section> 

    </div>
  )
}

export default FreshBeef