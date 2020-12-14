import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import BasicNavBar from "components/Navbars/BasicNavBar";
import {  BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
//import React from 'react';
import {Redirect} from 'react-router-dom';
import AdminPage from 'views/pages/AdminPage.js';
//import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom';
// core components
import Login from 'controllers/Login';


function SectionLogin(){
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/car_1.jpg") + ")"
        }}
      >
        <Container>
          <BasicNavBar />
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Bejelentkezés</h3>
                <h6 align="center">Csak adminisztrátorok részére!</h6>
                {/* <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mt-0"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div> */}
                <Form className="register-form">
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                  <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" />
                  </InputGroup>


                  {/* <Login /> */}

                   <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                    id="btnLogin"
                    // onClick={window.location.href="views/examples/AdminPage.js"}
                    >
                    <a href="/admin-page">Login</a>
                  </Button>



                  
                  {/* <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                    id="btnRegister"
                    onClick={}
                    >
                    Register
                  </Button> */}
                </Form>
                 {/* <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div> */}
            </Card>
              <div className="col text-center">
                {/* <Button
                  className="btn-round"
                  outline
                  color="neutral"
                  href="/register-page"
                  size="lg"
                  target="_blank"
                >
                  View Register Page
                </Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
