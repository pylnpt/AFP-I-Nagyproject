import React, { Component } from 'react';
import axios from 'axios';
import { Container  } from "reactstrap";
import AdminNavbar from "./Navbars/AdminNavBar.js";
import ContactHeader from "./Headers/ContactHeader.js";
import BasicFooter from "./Footers/BasicFooter.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class CreateCar extends Component {
    constructor(props) {
        super(props);

        this.onChangemake = this.onChangemake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangempg = this.onChangempg.bind(this);
        this.onChangeplate = this.onChangeplate.bind(this);
        this.onChangeReserved = this.onChangeReserved.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            make: '',
            model: '',
            mpg: 0,
            plate: '',
            reserved: ''
        }
    }

    onChangemake(e) {
        this.setState({
            make: e.target.value
        })
    }

    onChangeModel(e) {
        this.setState({
            model: e.target.value
        })
    }

    onChangempg(e) {
        this.setState({
            mpg: e.target.value
        })
    }

    onChangeplate(e) {
        this.setState({
            plate: e.target.value
        })
    }

    onChangeReserved(e){
        this.setState({
            reserved: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const car = {
            make: this.state.make,
            model: this.state.model,
            mpg: this.state.mpg,
            plate: this.state.plate,
            reserved: this.state.reserved
        }

        console.log(car);
        axios.post('http://localhost:5000/cars/add', car)
            .then(res => console.log(res.data));

        this.setState({
            make: "",
            model: "",
            mpg: 0,
            plate: "",
            reserved: ""
        })

        //window.location = '/create';
    }



    render() {
        return (
<>
      <AdminNavbar />
      <ContactHeader />
        <Container>
          <form onSubmit={this.onSubmit} id="create-car-form">
                    <div className="form-group">
                        <label>Márka: </label>
                        <input type="text"
                            placeholder="Ide írja a márkát"
                            required
                            className="form-control"
                            value={this.state.make}
                            onChange={this.onChangemake}
                        />
                    </div>
                    <div className="form-group">
                        <label>Típus: </label>
                        <input type="text"
                            placeholder="Ide írja a modellt"
                            required
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeModel}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fogyasztás L/100Km: </label>
                        <input type="number"
                            placeholder="Ide írja be a fogyasztást"
                            required
                            className="form-control"
                            value={this.state.mpg}
                            onChange={this.onChangempg}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rendszám: </label>
                        <input type="text"
                             placeholder="Ide írja a rendszámot"
                            required
                            className="form-control"
                            value={this.state.plate}
                            onChange={this.onChangeplate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Foglalva: </label>
                        <input type="text"
                             placeholder="IGEN/NEM"
                            required
                            className="form-control"
                            value={this.state.reserved}
                            onChange={this.onChangeReserved}
                        />
                    </div>

                    <div className="form-group">
                        
                        <input type="submit" value="Create Car" className="btn btn-primary" />
                    </div>
                </form>         
        </Container>
        <BasicFooter />
</>
        )
    }
}
CreateCar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(CreateCar);