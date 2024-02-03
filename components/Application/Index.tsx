import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'
import { FaGooglePlay } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";

const Application = () => {
  return (
    <div>  {/* banner */}

    <section className={styles.hero}>
        <div className="container">
            <div className={styles.content}>
                <div className={styles.hero_left}>
                    <h1 className={styles.title}> Make your online shop sob ready with our mobile all</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    <div>
                        <button className={styles.button}><FaGooglePlay />GET IT ON GOOGLE PLAY</button>
                        <button className={styles.button}><AiOutlineApple />DOWNLOAD ON THE APP STORE</button>
                    </div>
                    
                </div>
            </div>

        </div>
                <div className={styles.bannerImage}> <Image src="/app.png" alt="app" width={550} height={500} /></div>
    </section></div>
  )
}

export default Application