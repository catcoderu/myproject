import styles from "./styles.module.css"
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            {/* banner */}

            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.hero_left}>
                            <h1 className={styles.title}>Mükəmməl <span>Səhər Yeməyi</span> üçün Sizə Lazım Olan Hər şey </h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                            <div>
                                <button className={styles.button}>INDI ALMAQ</button>
                                <button className={styles.button}>DAHA ƏTRAFLI</button>
                            </div>
                        </div>
                    </div>

                </div>
                        <div className={styles.bannerImage}> <Image src="/sushi.png" alt="sushi" width={550} height={500} /></div>
            </section>
        </>
    )
}

export default Hero