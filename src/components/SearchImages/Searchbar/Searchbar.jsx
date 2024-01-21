import { Component } from 'react';

import styles from './searchbar.module.css';
class SearchBar extends Component {
  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form}>
          <button type="submit" className={styles.formButton}>
            <span className={styles.formButtonLabel}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
