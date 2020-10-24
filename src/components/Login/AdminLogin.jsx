import React, { useState } from "react";
import Axios from "axios";
// import { useHistory } from "react-router";
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
  // const history = useHistory();
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
    Axios({
      method: "post",
      url: "http://631136d22786.ngrok.io/admin/login/",
      headers: {
        "Content-Type": "application/json",
      },
      data: adminCredential,
    })
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          props.history.push("/admin/dashboard");
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
              User Name
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                name="username"
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
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default AdminLogin;
