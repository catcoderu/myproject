import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'

const FreshBeef = () => {
  return (
    <div>
        <section className={styles.hero}>
                <div className="container">
                    <div className={styles.content}>
                <div className={styles.bannerImage}> <Image src="/SpicealService.png" alt="SpicealService" width={550} height={500} /></div>
                        <div className={styles.hero_left}>
                            <h1 className={styles.title}> Bizim Spiceal Xidmətimiz Fresh <span>Beef</span></h1>
                            <h4 className={styles.price}><span>$̶2̶0̶.̶0̶0̶  </span> ̶$18.00</h4>
                            <button className={styles.button}>INDI ALMAQ</button>
                           
                            
                        </div>
                    </div>

                </div>
                      
            </section> 

    </div>
  )
}

export default FreshBeef