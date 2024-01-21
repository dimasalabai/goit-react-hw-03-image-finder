import { Component } from 'react';

import { getAllPosts } from '../../api/posts';
import PostsSearchForm from './PostsSearchForm/PostsSearchForm';
import PostsSearchList from './PostsSearchLIst/PostsSearchList';
import styles from './posts-search.module.css';

class PostsSearch extends Component {
  state = {
    posts: [],
    loading: false,
    error: null,
  };

  render() {
    const { posts, loading, error } = this.state;

    return (
      <>
        <PostsSearchForm />
        {error && <p className={styles.error}>{error}</p>}
        {loading && <p>...Loading</p>}
        {Boolean(posts.length) && <PostsSearchList items={posts} />}
      </>
    );
  }
}

export default PostsSearch;
