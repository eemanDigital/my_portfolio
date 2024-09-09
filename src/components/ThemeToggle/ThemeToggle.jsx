import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = ({ lightTheme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`${styles.themeToggle} ${
        lightTheme ? styles.light : styles.dark
      }`}
      aria-label="Toggle theme">
      {lightTheme ? (
        <FiMoon className={`${styles.themeIcon} ${styles.moon}`} />
      ) : (
        <FiSun className={`${styles.themeIcon} ${styles.sun}`} />
      )}
    </button>
  );
};

export default ThemeToggle;
