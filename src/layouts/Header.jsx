import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { expireCookie } from "../utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";

function Header() {
  const { data, isLoading } = useQuery(["profile"], getProfile);

  const logoutHandler = () => {
    expireCookie("accessToken");
    expireCookie("refreshToken");
    useQuery(["profile"], getProfile);
  };
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
        {data && data.data.role !== "ADMIN" && (
          <Link to="/auth">
            <span>
              <p>My Wall</p>
              <img src="profile.svg" />
            </span>
          </Link>
        )}
        <Link to="/auth" className={styles.button} onClick={logoutHandler}>
          Logout
        </Link>
        <Link to="/dashboard" className={styles.button}>
          Place an add
        </Link>
        {data && data.data.role === "ADMIN" && (
          <Link className={styles.button} to="/admin">
            Admin Panel
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
