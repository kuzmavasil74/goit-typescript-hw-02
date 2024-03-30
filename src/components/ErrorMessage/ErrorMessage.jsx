import css from '../ErrorMessage/ErrorMessage.module.css'
const ErrorMessage = ({ message = `Opps, somothing went wrong 😢` }) => {
  return <p className={css.errorMessage}>{message}</p>
}

export default ErrorMessage
