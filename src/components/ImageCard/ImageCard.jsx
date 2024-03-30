import css from '../ImageCard/ImageCard.module.css'
const ImageCard = ({ id, small, alt_description, description, likes }) => {
  return (
    <li className={css.imageCard} key={id}>
      <img className={css.imageCardImg} src={small} alt={id} />
      <br />
      <h2 className={css.imageCardTitle}>Title: {alt_description}</h2>
      <br />
      <h3 className={css.imageCardDescription}>Description: {description}</h3>
      <br />
      <h4 className={css.imageCardLikes}>Likes: {likes}</h4>
    </li>
  )
}

export default ImageCard
