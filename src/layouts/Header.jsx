import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>Tehran</p>
        </span>
      </div>
      <div>
        <Link to="/auth">
          <span>
            <p>My Wall</p>
            <img src="profile.svg" />
          </span>
        </Link>
        <Link to="/dashboard" className={styles.button}>
          Place an add
        </Link>
      </div>
    </header>
  );
}

export default Header;
