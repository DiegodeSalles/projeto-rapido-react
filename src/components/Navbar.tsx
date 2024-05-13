import styles from "../styles/Navbar.module.css";

export function Navbar() {
  return (
    <header>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="/" className={styles.navItem}>
              Criar usuário
            </a>
          </li>
          <li>
            <a href="/usuarios" className={styles.navItem}>
              Listar usuários
            </a>
          </li>
          <li>
            <a className={styles.navItem}>Criar postagem</a>
          </li>
          <li>
            <a href="/postagens" className={styles.navItem}>
              Listar postagens
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
