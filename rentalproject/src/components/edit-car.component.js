import React, { Component } from 'react';
import axios from 'axios';

import { logoutUser } from "../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class EditCar extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:5000/cars/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    make: res.data.make,
                    model: res.data.model,
                    mpg: res.data.mpg,
                    plate: res.data.plate,
                    reserved: res.data.reserved
                })
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    onChangeModel(e) {
        this.setState({
            model: e.target.value
        })
    }

    onChangemake(e) {
        this.setState({
            make: e.target.value
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
            model: this.state.model,
            make: this.state.make,
            mpg: this.state.mpg,
            plate: this.state.plate,
            reserved: this.state.reserved
        }

        console.log(car);
         axios.post('http://localhost:5000/cars/update/'+this.props.match.params.id, car)
             .then(res => console.log(res.data));

        this.setState({
            model: '',
            make: '',
            mpg: 0,
            plate: '',
            reserved: ''
        })

        window.location = '/car-list-page';
    }



    render() {
        return (
            <div>
                <h3>Edit Car</h3>
                <form onSubmit={this.onSubmit} id="create-car-form">
                    <div className="form-group">
                        <label>Model: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeModel}
                        />
                    </div>
                    <div className="form-group">
                        <label>make: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.make}
                            onChange={this.onChangemake}
                        />
                    </div>
                    <div className="form-group">
                        <label>mpg: </label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.mpg}
                            onChange={this.onChangempg}
                        />
                    </div>
                    <div className="form-group">
                        <label>Plate number: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.plate}
                            onChange={this.onChangeplate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Reserved: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.reserved}
                            onChange={this.onChangeReserved}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Car" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
EditCar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(EditCar);