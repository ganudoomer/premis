import React, { useState } from "react";
import Axios from "axios";
import {
  Form,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox,
  Button,
} from "react-bootstrap";
import "./AdminLogin.css";

function AdminLogin(props) {
  const [companyCredential, setCompanyCredential] = useState({});
  const changeHandler = (event) => {
    setCompanyCredential({
      ...companyCredential,
      [event.target.name]: event.target.value,
    });
    console.log(companyCredential);
  };
  const adminLoginSubmit = (event) => {
    event.preventDefault();
    console.log(companyCredential);
    Axios({
      method: "post",
      url: "",
      headers: {
        "Content-Type": "application/json",
      },
      data: companyCredential,
    })
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          props.history.push("");
        }
      })
      .catch((error) => {
        console.error("User invalid");
      });
  };
  return (
    <div className="adminLogin">
      <div className="loginForm">
        <div className="loginHeader">
          <h3>Sign in with</h3>
        </div>
        <div className="loginMedia">
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" bsStyle="primary">
                Google
              </Button>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Facebook</Button>
            </Col>
          </FormGroup>
        </div>
        <Form horizontal onSubmit={adminLoginSubmit}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                type="email"
                name="Email"
                onChange={changeHandler}
                placeholder="Email"
                required
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl
                type="password"
                name="password"
                onChange={changeHandler}
                placeholder="Password"
                required
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default AdminLogin;
