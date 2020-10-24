import React, { useState } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Radio,
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

const Form = (props) => {
  const [state, setState] = useState();
  const handleChange = (evt) => {
    console.log(evt.target.value);
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
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
              title="Question 1/10"
              content={
                <form onSubmit={onSubmitForm}>
                  {/* <FormInputs
                    ncols={["col-md-12"]}
                    properties={[
                      {
                        type: "text",
                        name: "question",
                        bsClass: "form-control",
                        onChange: handleChange,
                        
                      },
                    ]}
                  /> */}
                  <div className="question">
                    <h3>Hi how are you?</h3>
                  </div>

                  <FormGroup>
                    <Radio name="radioGroup" inline>
                      1
                    </Radio>{" "}
                    <Radio name="radioGroup" inline>
                      2
                    </Radio>{" "}
                    <Radio name="radioGroup" inline>
                      3
                    </Radio>
                  </FormGroup>

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

export default Form;
