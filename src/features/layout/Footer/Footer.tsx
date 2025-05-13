import styles from './Footer.module.css'
import { FaGithub, FaInstagram} from "react-icons/fa";
import { LuPlaneTakeoff } from "react-icons/lu";


const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p>© 2025 App de Países</p>
            <div className={styles.social}>
                <a
                        href="https://www.instagram.com/jhonn_g_rojas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram de Jhonny"
                        title="Instagram de Jhonny"
                    ><FaInstagram className={styles.icon} />
                </a>
                <a
                    href="#"
                    aria-label="Ir a países"
                    title="Ir a países"
                >
                    <LuPlaneTakeoff className={styles.icon} />
                </a>
                <a
                        href="https://github.com/Jhonpy22"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Github de Jhonpy"
                        title="Github de Jhonpy"
                    ><FaGithub className={styles.icon} />
                </a>
            </div>
        </footer>

    )
}
export default Footer