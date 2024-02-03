import Image from "next/image"
import Link from "next/link"
import styles from "./style.module.css"





const Footer = () => {
  return (
    <footer  className={styles.footer} id="footer-id">
      <div className={styles.footerElement}><span></span></div>
      <div className="container">
        <div className={`${styles.footerItemscontainer} ${styles.footerMargin}`}>
          <Image src="/logo.png" alt="Site Logo" width={127} height={34} className={styles.logoImg} />
          <div className={styles.footerTitle}>
            <p className={styles.footertitleItem}>Help Information</p>
            <p className={styles.footerLink} >Pagination
</p>
<p className={styles.footerLink} >Terms & Conditions

</p>
<p className={styles.footerLink} >Contact

</p>
<Link className={styles.footerLink}href="/"  >Home page

</Link>
<p className={styles.footerLink} >Term of use

</p>
          </div>
          <div className={styles.footerTitle}>
            <p className={styles.footertitleItem}>About us</p>
            <p className={styles.footertitleItem}>Help-center</p>
            <p className={styles.footertitleItem}>Privacy Policy
</p>
            <p className={styles.footertitleItem}>Receivers & Amplifiers</p>
            <p className={styles.footertitleItem}>Clothings</p>
            
          </div>
          <div className={styles.footerTitle}>
            <p className={styles.footertitleItem}>Categories</p>
            <p className={`${styles.footertextItem} ${styles.around}`}>DelDelivery</p>
            <p className={`${styles.footertextItem} ${styles.around}`}>Legal Notice</p>
            <p className={`${styles.footertextItem} ${styles.around}`}>Documentatio</p>
            <p className={`${styles.footertextItem} ${styles.around}`}>Secure payment</p>
            <p className={`${styles.footertextItem} ${styles.around}`}>Stores</p>

          </div>

        </div>
        <div className={styles.footerEnd}>
          <p className={styles.copy}>&copy; 2022 Data Privacy</p>
          <p className={styles.jed}>Design by: <span className={styles.jedspan}>JEDAI</span> </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer