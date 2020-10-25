import React, { useState, useEffect } from 'react';
import { Grid, Row, Col, SplitButton, MenuItem } from 'react-bootstrap';
import { Card } from 'components/Card/Card.jsx';
import { FormInputs } from 'components/FormInputs/FormInputs.jsx';
import Button from 'components/CustomButton/CustomButton.jsx';
import Axios from 'axios';

const Form = (props) => {
	const [ name, setName ] = useState();
	const [ job, setJob ] = useState();
	const [ opening, setOpening ] = useState();
	useEffect(() => {
		console.log(props.match.params.id);
		Axios.get(`http://631136d22786.ngrok.io/candidate/${props.match.params.id}/`).then((res) => {
			console.log(res.data);
			setName(res.data.company.name);
			setJob(res.data.jobOpenings);
			localStorage.setItem('questions', JSON.stringify(res.data.aptitudeQuestions));
		});
	}, []);
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
		const data = { data: state, opening: opening, company: props.match.params.id };
		localStorage.setItem('userInfo', JSON.stringify(data));
		props.history.push('/candidate/questions');
	};
	const onSelectHandler = (e) => {
		setOpening(e);
	};
	return (
		<div style={{ marginLeft: '50%', width: '55%', transform: 'translate(-50%)', marginTop: '20px' }}>
			<div>
				<Grid>
					<Row>
						<Col md={8}>
							<Card
								title={name}
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
										<FormInputs
											ncols={[ 'col-md-12' ]}
											properties={[
												{
													label: 'project',
													type: 'text',
													name: 'project',
													bsClass: 'form-control',
													placeholder: 'project',
													onChange: handleChange
												}
											]}
										/>
										<FormInputs
											ncols={[ 'col-md-12' ]}
											properties={[
												{
													label: 'whyHireYou',
													type: 'text',
													name: 'whyHireYou',
													bsClass: 'form-control',
													placeholder: 'whyHireYou',
													onChange: handleChange
												}
											]}
										/>
										<FormInputs
											ncols={[ 'col-md-12' ]}
											properties={[
												{
													label: 'Experience',
													type: 'number',
													name: 'experience',
													bsClass: 'form-control',
													placeholder: 'Experience',
													onChange: handleChange
												}
											]}
										/>
										<SplitButton
											title="Select"
											onSelect={onSelectHandler}
											pullRight
											id="split-button-pull-right"
										>
											{job ? (
												job.map((item) => <MenuItem eventKey={item.id}>{item.name}</MenuItem>)
											) : null}
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
