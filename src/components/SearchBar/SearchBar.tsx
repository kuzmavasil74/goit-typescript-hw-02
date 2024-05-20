import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import css from './SearchBar.module.css'

interface ISearchBarProps {
  onSetSearchQuery: (searchTerm: string) => void
}
interface IFormValues {
  searchTerm: string
}

const searchFormSchema = Yup.object().shape({
  searchTerm: Yup.string().required('Please enter a search term'),
})

const initialFormValue = {
  searchTerm: '',
}

const SearchBar: React.FC<ISearchBarProps> = ({ onSetSearchQuery }) => {
  const handleSubmit = (value: IFormValues) => {
    onSetSearchQuery(value.searchTerm)
  }
  return (
    <Formik
      initialValues={initialFormValue}
      validationSchema={searchFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.searchForm}>
        <h2></h2>
        <label>
          <Field
            className={css.searchFormImput}
            type="text"
            name="searchTerm"
            placeholder="Search for an image"
          />
          <ErrorMessage name="searchTerm" />
        </label>
        <button className={css.searchFormButton} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  )
}

export default SearchBar
