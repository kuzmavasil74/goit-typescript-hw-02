import { IImage } from '../../services/api'
export interface IImageGalleryProps {
  images: IImage[]
  openModal: (image: any) => void
}
