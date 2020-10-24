import React, { useState } from "react";
import Axios from "axios";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  SplitButton,
  MenuItem,
  ControlLabel,
  FormControl,
  Radio,
  ButtonGroup,
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

const Form = (props) => {
  const [jobOpening, setJobOpening] = useState("");
  const [btnState, setBtnState] = useState("Next");
  const [question, setQuestion] = useState({});
  const [totalQuestions, setTotalQuestions] = useState([]);
  const [iteration, setIteration] = useState(1);
  const changeHandler = (event) => {
    // console.log(event.target.value);
    // const value = event.target.value;
    setQuestion({
      ...question,
      [event.target.name]: event.target.value,
    });
  };
  const nextQuestion = (event) => {
    event.preventDefault();
    // console.log(question);
    setTotalQuestions([...totalQuestions, question]);
    setQuestion({
      question: "",
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
    });
    if (iteration < 10) {
      setIteration(iteration + 1);
    } else {
      setBtnState("Submit");
      console.log("counter reached 10");
      let questions = {
        questions: totalQuestions,
        jobOpening: jobOpening,
        companyId: localStorage.getItem("companyId"),
      };
      console.log(questions);
      // Axios({
      //   method: "post",
      //   url: "http://631136d22786.ngrok.io/company/questions/",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   question: {
      //     questions: totalQuestions,
      //     jobOpening: jobOpening,
      //     companyId: localStorage.getItem("companyId"),
      //   },
      // })
      Axios.post("http://631136d22786.ngrok.io/company/questions/", questions)
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            console.log(response);
            props.history.push("/company/dashboard");
          }
        })
        .catch((error) => {
          console.error("User invalid");
        });
    }
  };
  const rightAnswer = (eventKey) => {
    console.log(eventKey);
    setQuestion({ ...question, ["answer"]: eventKey });
  };
  const jobOpeningHandler = (event) => {
    setJobOpening(event.target.value);
  };
  console.log(totalQuestions);
  // console.log(question);

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={8}>
            <Card
              title={`Question ${iteration}/10`}
              content={
                <div>
                  <ControlLabel>Job Opening</ControlLabel>
                  <FormControl
                    type="text"
                    name="JobOpening"
                    value={jobOpening.jobOpening}
                    placeholder="Job Opening"
                    onChange={jobOpeningHandler}
                  />
                  <form>
                    <ControlLabel>Question</ControlLabel>
                    <FormControl
                      type="text"
                      name="question"
                      value={question.question}
                      placeholder="Enter question?"
                      onChange={changeHandler}
                    />

                    <ControlLabel>Choice 1</ControlLabel>
                    <FormControl
                      type="text"
                      name="choice1"
                      value={question.choice1}
                      placeholder="Enter choice 2"
                      onChange={changeHandler}
                    />
                    <ControlLabel>Choice 2</ControlLabel>
                    <FormControl
                      type="text"
                      name="choice2"
                      value={question.choice2}
                      placeholder="Enter choice 3"
                      onChange={changeHandler}
                    />
                    <ControlLabel>Choice 3</ControlLabel>
                    <FormControl
                      type="text"
                      name="choice3"
                      value={question.choice3}
                      placeholder="Enter choice 4"
                      onChange={changeHandler}
                    />
                    <ControlLabel>Choice 4</ControlLabel>
                    <FormControl
                      type="text"
                      name="choice4"
                      value={question.choice4}
                      placeholder="Enter text"
                      onChange={changeHandler}
                    />
                    <br />
                    <Button
                      bsStyle="success"
                      pullRight
                      fill
                      type="submit"
                      onClick={nextQuestion}
                    >
                      {btnState} &rarr;
                    </Button>
                    <SplitButton
                      bsStyle="default"
                      title="answer"
                      onSelect={rightAnswer}
                    >
                      <MenuItem eventKey="choice1">1</MenuItem>
                      <MenuItem eventKey="choice2">2</MenuItem>
                      <MenuItem eventKey="choice3">3</MenuItem>
                      <MenuItem eventKey="choice4" active >4</MenuItem>
                    </SplitButton>
                    <div className="clearfix" />
                  </form>
                </div>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Form;
