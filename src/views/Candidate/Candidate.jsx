import React, { useState, useEffect } from 'react';
import { Grid, Row, Col, SplitButton, MenuItem } from 'react-bootstrap';
import { Card } from 'components/Card/Card.jsx';
import { FormInputs } from 'components/FormInputs/FormInputs.jsx';
import Button from 'components/CustomButton/CustomButton.jsx';
import Axios from 'axios';

const Form = (props) => {
	useEffect(() => {}, []);
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
		const data = state;
		localStorage.setItem('userInfo', JSON.stringify(data));
		props.history.push('/');
	};
	return (
		<div style={{ marginLeft: '50%', width: '55%', transform: 'translate(-50%)', marginTop: '20px' }}>
			<div>
				<Grid>
					<Row>
						<Col md={8}>
							<Card
								title="Company Name "
								content={
									<form onSubmit={onSubmitForm}>
										<FormInputs
											ncols={[ 'col-md-12' ]}
											properties={[
												{
													label: 'Name',
													type: 'text',
													name: 'Name',
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
													label: 'Qualification',
													type: 'text',
													name: 'qualification',
													bsClass: 'form-control',
													placeholder: 'qualification',
													onChange: handleChange
												}
											]}
										/>
										<SplitButton title="Select" pullRight id="split-button-pull-right">
											<MenuItem eventKey="1">Action</MenuItem>
										</SplitButton>
										<br />
										<br />
										<Button bsStyle="info" fill type="submit">
											Next
										</Button>
										<div className="clearfix" />
									</form>
								}
							/>
						</Col>
					</Row>
				</Grid>
			</div>
		</div>
	);
};

export default Form;
