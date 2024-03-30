import axios from 'axios'

export const requestImages = async () => {
  const { data } = await axios.get(
    'https://api.unsplash.com/photos/?client_id=CtlI5aXGdwrzK3d2XFGXEZis-d7j8Zn2-13GWom109o'
  )
  return data
}

export const requestImagesByQuery = async (query = '', page = 1) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&page=${page}&query=${query}&client_id=CtlI5aXGdwrzK3d2XFGXEZis-d7j8Zn2-13GWom109o`
  )
  const data = response.data
  if (data && data.results) {
    return data.results
  } else {
    throw new Error('No results found')
  }
}
