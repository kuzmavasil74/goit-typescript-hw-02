import axios, { AxiosResponse } from 'axios'
import { type } from 'os'

export interface IImage {
  id: string
  urls: {
    small: string
    regular: string
  }
  alt_description: string
  description: string
  likes: number
}
type UnsplashResponse = AxiosResponse<{ results: IImage[] }>
export const requestImagesByQuery = async (query = '', page = 1) => {
  const response: UnsplashResponse = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&page=${page}&query=${query}&client_id=CtlI5aXGdwrzK3d2XFGXEZis-d7j8Zn2-13GWom109o`
  )
  const data: IImage[] = response.data.results
  return data
}
