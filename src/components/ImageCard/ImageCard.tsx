// ImageCard.jsx
import React from 'react'
import css from '../ImageCard/ImageCard.module.css'
import { IImageCardProps } from './ImageCard.types'
const ImageCard: React.FC<IImageCardProps> = ({
  small,
  alt_description,
  description,
  likes,
  onClick,
}) => {
  return (
    <li className={css.imageCard} onClick={onClick}>
      <img className={css.imageCardImg} src={small} alt={alt_description} />
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
