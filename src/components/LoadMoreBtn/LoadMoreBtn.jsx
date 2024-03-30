const LoadMoreBtn = ({ onSetPage, disable }) => {
  return (
    <button onClick={onSetPage} disabled={disable}>
      Load more
    </button>
  )
}

export default LoadMoreBtn
