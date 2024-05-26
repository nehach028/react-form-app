// Helper methods to validate various form fields


export const isEmailValid = (email) => {
  if (!(/^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(email))) return "Email is invalid";
  return false
}

export const isNameValid = (name, value) => {
  if (value.length < 2) return "Name must be atleast 3 character long";
  if (value.length > 50) return "Name can not be exceeds 50 character length";
  if (!/^[a-zA-Z ]+$/.test(value)) return "Name must contains only letters and spaces";
  return false
}

export const isAgeValid = (age) => {
  if (age < 18 || age > 100) return "Enetr valid age between 18 years and 100 years";
  return false
}

export const isRequiredFieldsEmpty = (formData) => {
  const { firstName, lastName, age, email } = formData
  if (firstName === '' || lastName === '' || email === '' || age === '') {
    return true
  }
  return false
}

export const fieldHasError = (fieldError) => {
  const { firstName, lastName, email, age } = fieldError
  return (!!firstName || !!lastName || !!email || !!age)
}