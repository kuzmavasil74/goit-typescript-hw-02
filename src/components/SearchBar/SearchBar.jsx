import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const searchFormSchema = Yup.object().shape({
  searchTerm: Yup.string().required('Please enter a search term'),
})

const initialFormValue = {
  searchTerm: '',
}

const SearchBar = ({ onSetSerachQuery }) => {
  const handleSubmit = (value) => {
    onSetSerachQuery(value.searchTerm)
  }
  return (
    <Formik
      initialValues={initialFormValue}
      validationSchema={searchFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <Field
            type="text"
            name="searchTerm"
            placeholder="Search for an image"
          />
          <ErrorMessage name="searchTerm" aria-label="Search" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default SearchBar
