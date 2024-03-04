import styles from "./footer.module.css"

const Footer = () => {
  return(
      <div className={styles.container}>
        <div className={styles.logo}>FareeFirst</div>
      <div className={styles.text}>© 2018-2024 Amahop Technologies Pvt. Ltd. All rights reserved.</div>
      </div>
  )
}
export default Footer;