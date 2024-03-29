import { useEffect, useState } from 'react'
import './App.module.css'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import { requestImages } from './services/api'
import ImageGallery from './components/ImageGallery/ImageGallery'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  const [images, setImages] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (searchQuery.length === 0) return

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
  }, [searchQuery])
  const onSetSerachQuery = (searchTerm) => {
    setSearchQuery(searchTerm)
  }
  return (
    <>
      <h1>Fetches images from the Unsplash API using Axios</h1>
      <SearchBar onSetSerachQuery={onSetSerachQuery} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {images && <ImageGallery images={images} />}
    </>
  )
}

export default App
