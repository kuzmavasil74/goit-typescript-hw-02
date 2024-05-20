import { IImage } from '../../services/api'

export interface IImageModalProps {
  isOpen: boolean
  onClose: () => void
  selectedImage: IImage | null
}
