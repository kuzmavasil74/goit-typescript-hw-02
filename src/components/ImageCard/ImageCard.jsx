const ImageCard = ({ id, small, alt_description, description, likes }) => {
  return (
    <li key={id}>
      <img src={small} alt={id} />
      <br />
      <h2>Title:{alt_description}</h2>
      <br />
      <h3>Description: {description}</h3>
      <br />
      <h4>Likes: {likes}</h4>
    </li>
  )
}

export default ImageCard
