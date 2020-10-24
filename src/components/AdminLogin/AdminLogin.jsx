import React, { useState } from "react";
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
  const [adminCredential, setAdminCredential] = useState({});
  const changeHandler = (event) => {
    setAdminCredential({
      ...adminCredential,
      [event.target.name]: event.target.value,
    });
    console.log(adminCredential);
  };
  const adminLoginSubmit = (event) => {
    event.preventDefault();
    console.log(adminCredential);
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
                Gmail
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
              User Name
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                name="userName"
                onChange={changeHandler}
                placeholder="userName"
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
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default AdminLogin;
