import React, { useState } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Radio } from 'react-bootstrap';
import { Card } from 'components/Card/Card.jsx';
import { FormInputs } from 'components/FormInputs/FormInputs.jsx';
import Button from 'components/CustomButton/CustomButton.jsx';

const Form = (props) => {
	const [ state, setState ] = useState();
	const [ count, setCount ] = useState(1);
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
		setCount(count + 1);
	};
	let questions = [
		{ question: 'asdlfjalsdf', option1: 'sasdf', option2: 'asfdasdf', option3: 'asdfkjl', option4: 'asdfafds' },
		{ question: 'asdlllkfjalsdf', option1: 'sasdf', option2: 'asfdasdf', option3: 'asdfkjl', option4: 'asdfafds' },
		{ question: 'asdlfklkjalsdf', option1: 'sasdf', option2: 'asfdasdf', option3: 'asdfkjl', option4: 'asdfafds' },
		{ question: 'asdlfjalsdf', option1: 'sasdf', option2: 'asfdasdf', option3: 'asdfkjl', option4: 'asdfafds' },
		{
			question: 'aslklklkdlfjalsdf',
			option1: 'sasdf',
			option2: 'asfdasdf',
			option3: 'asdfkjl',
			option4: 'asdfafds'
		},
		{
			question: 'aslklklllkdlfjalsdf',
			option1: 'sasdf',
			option2: 'asfdasdf',
			option3: 'asdfkjl',
			option4: 'asdfafds'
		}
	];

	return (
		<div style={{ marginLeft: '50%', width: '50%', transform: 'translate(-50%)', marginTop: '20px' }}>
			<Grid fluid>
				<Row>
					<Col md={8}>
						<Card
							title={`Question ${count}/10`}
							content={
								<form onSubmit={onSubmitForm}>
									<div className="question">
										<h3>{questions[count - 1].question}</h3>
									</div>
									<FormGroup>
										<Radio name="radioGroup" inline>
											{questions[count - 1].option1}
										</Radio>{' '}
										<Radio name="radioGroup" inline>
											{questions[count - 1].option2}
										</Radio>{' '}
										<Radio name="radioGroup" inline>
											{questions[count - 1].option3}
										</Radio>
										<Radio name="radioGroup" inline>
											{questions[count - 1].option4}
										</Radio>
									</FormGroup>
									<Button bsStyle="info" fill type="submit">
										Next Question
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

export default Form;
