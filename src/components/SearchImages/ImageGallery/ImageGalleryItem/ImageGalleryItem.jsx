import styles from './image-gallery-item.module.css';

const ImageGalleryItem = ({ items }) => {
  return items.map(({ id, urls }) => {
    return (
      <li className={styles.imageGalleryItem} key={id}>
        <img
          src={urls.regular}
          alt=""
          className={styles.imageGalleryItemImage}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
