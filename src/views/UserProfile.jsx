import React, { useState } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from 'components/Card/Card.jsx';
import { FormInputs } from 'components/FormInputs/FormInputs.jsx';
import Button from 'components/CustomButton/CustomButton.jsx';

const UserProfile = (props) => {
	const [ state, setState ] = useState();
	const handleChange = (evt) => {
		console.log(evt.target.value);
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value
		});
	};
	const onSubmitForm = (e) => {
		e.preventDefault();
		console.log(state);
	};
	return (
		<div className="content">
			<Grid fluid>
				<Row>
					<Col md={8}>
						<Card
							title="Add Company"
							content={
								<form onSubmit={onSubmitForm}>
									<FormInputs
										ncols={[ 'col-md-12' ]}
										properties={[
											{
												label: 'Company',
												type: 'text',
												name: 'Company',
												bsClass: 'form-control',
												placeholder: 'Company',
												onChange: handleChange
											}
										]}
									/>

									<FormInputs
										ncols={[ 'col-md-12' ]}
										properties={[
											{
												label: 'Username',
												type: 'text',
												name: 'Username',
												bsClass: 'form-control',
												placeholder: 'Username',
												onChange: handleChange
											}
										]}
									/>
									<FormInputs
										ncols={[ 'col-md-12' ]}
										properties={[
											{
												label: 'Email address',
												type: 'email',
												bsClass: 'form-control',
												name: 'Email',
												placeholder: 'Email',
												onChange: handleChange
											}
										]}
									/>
									<FormInputs
										ncols={[ 'col-md-12' ]}
										properties={[
											{
												label: 'Phone',
												type: 'Number',
												bsClass: 'form-control',
												name: 'Phone',
												placeholder: 'Phone',
												onChange: handleChange
											}
										]}
									/>
									<FormInputs
										ncols={[ 'col-md-12' ]}
										properties={[
											{
												label: 'Password',
												name: 'Password',
												type: 'password',
												bsClass: 'form-control',
												placeholder: 'City',
												onChange: handleChange
											}
										]}
									/>
									<Button bsStyle="info" fill type="submit">
										Add Company
									</Button>
									<div className="clearfix" />
								</form>
							}
						/>
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default UserProfile;
