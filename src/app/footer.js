import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerSocial}>
        <a
          href="https://www.linkedin.com/in/alan-douglas-aranda/"
          target="_blank"
        >
          <FaLinkedinIn size={30} className={styles.socialIcon} />
        </a>

        <a href="https://www.instagram.com/alandouglas/" target="_blank">
          <FaInstagram size={30} className={styles.socialIcon} />
        </a>
        <a
          href="https://www.malt.es/profile/alandouglasaranda1"
          target="_blank"
        >
          <img
            src="malt_icon.png"
            alt="Malt Icon"
            width="30"
            height="30"
            className={styles.socialIcon}
          />
        </a>
      </div>
    </footer>
  )
}
