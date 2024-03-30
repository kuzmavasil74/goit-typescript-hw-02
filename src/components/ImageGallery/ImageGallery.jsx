import css from '../ImageGallery/ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <ImageCard
              key={image.id}
              small={image.urls.small}
              alt_description={image.alt_description}
              description={image.description}
              likes={image.likes}
            />
          )
        })}
    </ul>
  )
}

export default ImageGallery
