import { useEffect, useState } from 'react'
import './App.module.css'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import { requestImages, requestImagesByQuery } from './services/api'
import ImageGallery from './components/ImageGallery/ImageGallery'
import SearchBar from './components/SearchBar/SearchBar'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'

function App() {
  const [images, setImages] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchImages() {
      setIsLoading(true)
      try {
        const data = await requestImages()
        setImages(data)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchImages()
  }, [])

  useEffect(() => {
    if (query.length === 0) return

    async function fetchImagesByQuery() {
      setIsLoading(true)
      try {
        const data = await requestImagesByQuery(query, page)
        setImages((prevImages) => [...prevImages, ...data])
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchImagesByQuery()
  }, [query, page])

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm)
  }
  const onSetPage = () => setPage(page + 1)
  return (
    <>
      <h1>Fetches images from the Unsplash API using Axios</h1>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {images && <ImageGallery images={images} />}
      <LoadMoreBtn onSetPage={onSetPage} />
    </>
  )
}

export default App
