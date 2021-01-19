import React, { memo, useRef } from "react";
import styles from "./nav_bar.module.css";

const Navbar = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Search..."
        type="text"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.searchImage}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </nav>
  );
});

export default Navbar;
