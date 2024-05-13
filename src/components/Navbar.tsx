import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export function Navbar() {
  return (
    <header>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/" className={styles.navItem}>
              Criar usuário
            </NavLink>
          </li>
          <li>
            <NavLink to="/usuarios" className={styles.navItem}>
              Listar usuários
            </NavLink>
          </li>
          <li>
            <NavLink to="/criar_postagem" className={styles.navItem}>
              Criar postagem
            </NavLink>
          </li>
          <li>
            <NavLink to="/postagens" className={styles.navItem}>
              Listar postagens
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
