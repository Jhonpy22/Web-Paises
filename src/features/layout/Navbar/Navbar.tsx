import { Link } from "@tanstack/react-router";
import styles from './Navbar.module.css'

const navLinks =[
    {to: '/', label: 'Inicio'},
    {to: '/crear', label: 'Crear Pais'},
    {to: '/editar', label: 'Editar Pais'},
    {to: '/eliminar', label: 'Eliminar Pais'},
    {to: '/detalle', label: 'Detalles'},
]
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>🌎 App de Países</div>
                <ul className={styles.links}>
                    {navLinks.map(link => (
                        <li key={link.to}>
                            <Link to={link.to} className={styles.link}>
                                {link.label}
                            </Link>
                        </li>
                        )
                    )}
                </ul>
        </nav> 
    );
};

export default Navbar;
