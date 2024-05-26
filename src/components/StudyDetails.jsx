import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, Paper, FormControlLabel, RadioGroup, Box, Radio, Typography, TextField } from '@mui/material';

/**
 * 
 * Represents a study details and radio button form fields component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.formData - The state value object of text field inputs.
 * @param {function} props.handleChange - An Onchange event function for evry text input field.
 * @returns {React.ReactElement} A study detail element.
 */

const StudyDetails = ({ formData, handleChange, show }) => {

	const { studyDetails, extraInformation, radioButtonGroup } = formData

	const renderStudyDetailsSection = (
		<>
			<Typography variant="subtitle2" sx={{ mt: 2 }}>Please provide the name(s) of what you are studying</Typography>
			<TextField
				id="study-details"
				label="Study details"
				name="studyDetails"
				placeholder='Detail your study here'
				value={studyDetails}
				onChange={(e) => handleChange(e)}
				sx={{ mt: 3 }}
				multiline
				fullWidth
				size='medium'
				InputLabelProps={{
					shrink: true,
				}}
				rows={8}
			/>
		</>
	)

	return (
		<>
			<Paper sx={{ p: 2, mt: 1.5 }}>
				<Box>
					<FormControl>
						<FormLabel id="radio-button-group-label" sx={{ fontSize: '1rem' }}>Are you currently studying?</FormLabel>
						<RadioGroup
							aria-labelledby="radio-buttons-group-label"
							defaultValue="yes"
							name="radioButtonGroup"
							value={radioButtonGroup}
							onChange={(e) => handleChange(e)}
						>
							<FormControlLabel value="yes" control={<Radio />} label="Yes" />
							<FormControlLabel value="no" control={<Radio />} label="No" />
						</RadioGroup>
					</FormControl>
					{show ? renderStudyDetailsSection : ''}
				</Box>
			</Paper>

			<Paper sx={{ p: 2, mt: 1.5 }}>
				<Typography>Extra Information?</Typography>
				<TextField
					id="extra-information"
					label="Extra information"
					name="extraInformation"
					placeholder='Enter any additional information here'
					value={extraInformation}
					onChange={(e) => handleChange(e)}
					sx={{ mt: 3 }}
					multiline
					fullWidth
					size='medium'
					InputLabelProps={{
						shrink: true,
					}}
					rows={8}
				/>
			</Paper>
		</>
	)
};

StudyDetails.propTypes = {
	formData: PropTypes.objectOf(PropTypes.string),
	handleChange: PropTypes.func.isRequired,
	show: PropTypes.bool
};

export default StudyDetails;