import { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import PerosnalDetails from './components/PerosnalDetails';
import StudyDetails from './components/StudyDetails';
import FormButtons from './components/FormButtons';
import { isEmailValid, isNameValid, isAgeValid, isRequiredFieldsEmpty, fieldHasError } from './helper/validator';

/**
 * 
 * @returns {React.ReactElement} A form element.
 */

function App() {

  const initialFormData = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    age: '',
    studyDetails: '',
    extraInformation: '',
    radioButtonGroup: 'yes'
  }

  const initialFieldError = {
    firstName: false,
    lastName: false,
    email: false,
    age: false,
  }

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(true);
  const [formData, setFormData] = useState(initialFormData)
  const [fieldError, setFieldError] = useState(initialFieldError)


  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

    if (name === 'firstName' || name === 'lastName') {
      setFieldError({ ...fieldError, [name]: isNameValid(name, value) })
    }
    if (name === 'email') {
      setFieldError({ ...fieldError, [name]: isEmailValid(value) })
    }
    if (name === 'age') {
      setFieldError({ ...fieldError, [name]: isAgeValid(value) })
    }

    /**
     * Show/Hide Study details section
     */
    if (name === 'radioButtonGroup') {
      setShow(prev => !prev)
    }
  }


  const handleCancel = (e) => {
    setFormData(initialFormData)
    setFieldError(initialFieldError)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    if (fieldHasError(fieldError) || isRequiredFieldsEmpty(formData)) {
      setSuccess(false);
      setLoading(false);
      return alert("Ops!! Error has occurred, Please check required input fields.")
    } else {
      setSuccess(true)
      return alert("Form has submitted Successfully.")
    }

  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#666666' }}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <form onSubmit={handleSubmit}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5">
                Student Personal Detail Form
              </Typography>
              <Typography variant='subtitle1'>
                Please Enter all the personal detail
              </Typography>
            </Paper>
            <PerosnalDetails handleChange={handleChange} formData={formData} error={fieldError} />
            <StudyDetails handleChange={handleChange} formData={formData} show={show} />
            <FormButtons loading={loading} handleCancel={handleCancel} />
          </form>
        </Stack>
      </Box>
    </Container>
  )
}

export default App
