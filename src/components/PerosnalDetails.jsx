import React from 'react';
import {Typography,Box, TextField, Divider, Paper } from '@mui/material';


/**
 * 
 * Represents a personal details form fields component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.formData - The value object of text field inputs.
 * @param {Object} props.error - The error value object of each required input field.
 * @param {function} props.handleChange - An Onchange event function for evry text input field.
 * @returns {React.ReactElement} A Pesronal details form element.
 */

const PerosnalDetails = ({formData,handleChange, error}) => {
  return (
    <Paper sx={{ p: 2 ,mt: 1.5}}>
      <Typography variant='body1'>Personal Details</Typography>
      <Box >
        <TextField
          id="first-name"
          label="First name"
          name='firstName'
          placeholder='First name'
          type="text"
          value={formData.firstName}
          error={!!error.firstName}
          helperText={error.firstName}
          onChange={(e) => handleChange(e)}
          sx={{ mt: 3 }}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="middle-name"
          label="Middle name"
          name='middleName'
          placeholder='Middle name'
          value={formData.middleName}
          onChange={(e) => handleChange(e)}
          type="text"
          sx={{ mt: 3 }}
          helperText="Optional"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="last-name"
          label="Last name"
          name='lastName'
          placeholder='Last name'
          type="text"
          value={formData.lastName}
          error={!!error.lastName}
          helperText={error.lastName}
          onChange={(e) => handleChange(e)}
          sx={{ mt: 3 }}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Divider sx={{color: '#070D14'}}/>
        <TextField
          id="email"
          label="Email"
          name='email'
          placeholder='email@email.com'
          type="email"
          value={formData.email}
          error={!!error.email}
          helperText={error.email}
          onChange={(e) => handleChange(e)}
          sx={{ mt: 3 }}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="age"
          label="Age"
          name='age'
          placeholder='Enter a number'
          type="number"
          error={!!error.age}
          helperText={error.age}
          value={formData.age}
          onChange={(e) => handleChange(e)}
          sx={{ mt: 3 }}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
    </Paper>
  );
};



export default PerosnalDetails;