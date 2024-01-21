import { Component } from 'react';

import styles from './posts-search-form.module.css';
class PostsSearchForm extends Component {
  render() {
    return (
      <form className={styles.form}>
        <div className={styles.fieldGroup}>
          <label>Enter search phrase</label>
          <input name="search" type="text" placeholder="Enter search phrase" />
        </div>

        <button type="submit">Search</button>
      </form>
    );
  }
}

export default PostsSearchForm;
