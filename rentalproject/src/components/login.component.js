import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import {
    Card,
    Form,
    Container,
    Row,
    Col
  } from "reactstrap";
  import BasicNavBar from "components/Navbars/BasicNavBar";

class Login extends Component {
    constructor() {
        super();

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        };
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/car-list-page");
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/car-list-page"); 
        }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.loginUser(user); 
    }



    render() {
        return (
            <div>


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
            <Form className="register-form">
                <form onSubmit={this.onSubmit} id="create-car-form">
                    <div className="form-group">
                        <label>Felhasználónév: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Jelszó: </label>
                        <input type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Belépés" className="btn btn-primary" />
                    </div>
                </form>
               




            </Form>
            </Card>
            <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Col>
            </Row>
            </Container>
            </div>

            </div>

        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);