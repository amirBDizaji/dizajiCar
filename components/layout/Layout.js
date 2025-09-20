import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>DIZAJI CAR</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <p>
          Developed with ❤️ by{" "}
          <a href="https://amirBDizaji.com" target="_blank">
            Amir B. Dizaji{" "}
          </a>
          &copy;
        </p>
      </footer>
    </>
  );
}

export default Layout;
