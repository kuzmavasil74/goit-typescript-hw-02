import React from 'react'
import css from '../LoadMoreBtn/LoadMoreBtn.module.css'

interface ILoadMoreBtnProps {
  onSetPage: () => void
  disable: boolean
}
const LoadMoreBtn: React.FC<ILoadMoreBtnProps> = ({ onSetPage, disable }) => {
  return (
    <button className={css.LoadMoreBtn} onClick={onSetPage} disabled={disable}>
      Load more
    </button>
  )
}

export default LoadMoreBtn
