import { Component } from 'react';

import styles from './search-images.module.css';
import { getAllPhotos } from 'api/photos';

import { Loader } from 'components/Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGallery/ImageGalleryItem/ImageGalleryItem';

class SearchImages extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });

    try {
      const { data } = await getAllPhotos();
      this.setState({
        images: data?.length ? data : [],
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { images, loading, error } = this.state;
    return (
      <div className={styles.wrapper}>
        {error && <p className={styles.error}>{error}</p>}
        {loading && <Loader />}

        <ImageGallery>
          <ImageGalleryItem items={images} />
        </ImageGallery>
      </div>
    );
  }
}

export default SearchImages;
