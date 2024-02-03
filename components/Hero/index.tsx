
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
                                <button className={styles.button}>INDI AL</button>
                                <button className={styles.button}>DAHA ƏTRAFLI</button>
                            </div>
                            
                        </div>
                    </div>

                </div>
                        <div className={styles.bannerImage}> <Image src="/sushi.png" alt="sushi" width={550} height={500} /></div>
            </section>
            <div className={styles.productsIcons}>
                                 <Image src="/Fruits.png" alt="Fruits" width={57} height={67} />
                                 <Image src="/Vegetables.png" alt="Vegetable" width={57} height={67} />
                                 <Image src="/Semi-finished.png" alt="Semi-finished" width={57} height={67} />
                                 <Image src="/Bakery.png" alt="Bakery" width={57} height={67} />
                                 <Image src="/Meat.png" alt="Meat" width={57} height={67} />
                                 <Image src="/Pasta.png" alt="Pasta" width={57} height={67} />
                                 <Image src="/Sweets.png" alt="Sweets" width={57} height={67} />
                                
                            </div>
                            
        </>
    )
}

export default Hero