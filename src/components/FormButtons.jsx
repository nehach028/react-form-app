import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Paper, Box } from '@mui/material';

/**
 * 
 * Represents a form submit/cancel buttons component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Boolean} props.loading - The loading state value.
 * @param {function} props.handleCancel - A function to clear out form fields .
 * @returns {React.ReactElement} A form button element.
 */

const FormButtons = ({ loading, handleCancel }) => {
  return (
    <Paper sx={{ p: 2, mt: 1.5 }}>
      <Typography>Complete form</Typography>
      <Box
        sx={{
          mt: 3,
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        <Button variant="outlined" sx={{ width: '50%', textTransform: 'none' }} size="large" onClick={handleCancel}>Cancel</Button>
        <Button variant="contained" sx={{ width: '50%', textTransform: 'none' }} size="large" type='submit'>Submit</Button>
      </Box>
    </Paper>
  );
};

FormButtons.propTypes = {
  loading: PropTypes.bool,
  handleCancel: PropTypes.func.isRequired
};

export default FormButtons;