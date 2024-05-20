import React from 'react'
import css from './ErrorMessage.module.css'
import { IErrorMessageProps } from './ErrorMessage.types'
const ErrorMessage: React.FC<IErrorMessageProps> = ({
  message = `Opps, somothing went wrong 😢`,
}) => {
  return <p className={css.errorMessage}>{message}</p>
}

export default ErrorMessage
