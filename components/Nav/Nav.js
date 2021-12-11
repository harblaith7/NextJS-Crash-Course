import Link from "next/link";
import React from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className={styles["nav-link"]} href="/">
        Navbar
      </Link>
    </nav>
  );
}
