import axios from 'axios'

export const requestImages = async () => {
  const { data } = await axios.get(
    'https://api.unsplash.com/photos/?client_id=CtlI5aXGdwrzK3d2XFGXEZis-d7j8Zn2-13GWom109o'
  )
  return data
}
