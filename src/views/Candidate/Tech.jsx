import React, { useState, useEffect } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Radio } from 'react-bootstrap';
import { Card } from 'components/Card/Card.jsx';
import { FormInputs } from 'components/FormInputs/FormInputs.jsx';
import Button from 'components/CustomButton/CustomButton.jsx';
import Axios from 'axios';

const Form = (props) => {
	const [ questions, setQuestions ] = useState();
	useEffect(() => {
		setQuestions(JSON.parse(localStorage.getItem('questions')));
		console.log(JSON.parse(localStorage.getItem('questions')));
		const opening = JSON.parse(localStorage.getItem('userInfo')).opening;
		Axios.get(`http://631136d22786.ngrok.io/candidate/job-opening/${opening}/`).then((res) => {
			console.log(res.data);
			setQuestions(res.data);
		});
	}, []);
	const [ state, setState ] = useState();
	const [ count, setCount ] = useState(1);
	const [ answer, setAnwser ] = useState([]);
	const [ option, setOption ] = useState();
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
		if (count === questions.length) {
			const questionObj = questions[count - 1];
			console.log(questionObj);
			const arr = answer;
			if (questionObj.answer === option) {
				arr.push({
					questionId: questionObj.id,
					questionTitle: questionObj.question,
					selectedAnswer: option,
					correct: true
				});
			} else {
				arr.push({
					questionId: questionObj.id,
					questionTitle: questionObj.question,
					selectedAnswer: option,
					correct: false
				});
				setAnwser(arr);
				console.log(arr);
				console.log(option);
			}
			localStorage.setItem('appitudeAnswer', JSON.stringify(answer));
			const user = JSON.parse(localStorage.getItem('userInfo'));
			const appitudeAnswer = JSON.parse(localStorage.getItem('appitudeAnswer'));

			const data = {
				companyId: user.company,
				name: user.data.Name,
				email: user.data.Email,
				phone: user.data.Phone,
				qualification: user.data.qualification,
				jobOpeningId: user.opening,
				experience: user.data.experience,
				project: user.data.project,
				whyHireYou: user.data.whyHireYou,
				aptitudeQuestions: appitudeAnswer,
				skillQuestions: answer
			};
			Axios.post('http://631136d22786.ngrok.io/candidate/', data).then((res) => {
				alert('Yes you have register succuessfully');
			});
			console.log(data);
			console.log('Done');
		} else if (count <= 10) {
			setCount(count + 1);
			const questionObj = questions[count - 1];
			console.log(questionObj);
			const arr = answer;
			if (questionObj.answer === option) {
				arr.push({
					questionId: questionObj.id,
					questionTitle: questionObj.question,
					selectedAnswer: option,
					correct: true
				});
			} else {
				arr.push({
					questionId: questionObj.id,
					questionTitle: questionObj.question,
					selectedAnswer: option,
					correct: false
				});
				setAnwser(arr);
				console.log(arr);
				console.log(option);
			}
		}
	};

	return (
		<div style={{ marginLeft: '50%', width: '50%', transform: 'translate(-50%)', marginTop: '20px' }}>
			<Grid fluid>
				<Row>
					<Col md={8}>
						{questions ? (
							<Card
								title={`Question ${count}/10`}
								content={
									<form onSubmit={onSubmitForm}>
										<div className="question">
											<h3>{questions[count - 1].question}</h3>
										</div>
										<FormGroup onChange={(e) => setOption(e.target.value)}>
											<Radio value="choice1" name="radioGroup" inline>
												{questions[count - 1].choice1}
											</Radio>{' '}
											<Radio value="choice2" name="radioGroup" inline>
												{questions[count - 1].choice2}
											</Radio>{' '}
											<Radio value="choice3" name="radioGroup" inline>
												{questions[count - 1].choice3}
											</Radio>
											<Radio value="choice4" name="radioGroup" inline>
												{questions[count - 1].choice4}
											</Radio>
										</FormGroup>
										<Button bsStyle="info" fill type="submit">
											Next Question
										</Button>
										<div className="clearfix" />
									</form>
								}
							/>
						) : null}
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default Form;
