import React, { Component } from 'react';
import axios from 'axios';
import {
    Container
  } from "reactstrap";
  
  // core components
  import ContactHeader from "./Headers/ContactHeader.js";
  import BasicFooter from "./Footers/BasicFooter.js";
  import BasicNavBar from "./Navbars/BasicNavBar.js";

const Car = props => (
    <tr>
        <td>{props.car.brand}</td>
        <td>{props.car.model}</td>
        <td>{props.car.consumption}</td>
        <td>{props.car.plateNumber}</td>
    </tr>    
)

export default class OurCars extends Component {
    constructor(props) {
        super(props);
        this.state = { cars: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cars/filtered')
            .then(res => {
                this.setState({ cars: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    carsList(){
        return this.state.cars.map(currentcar => {
            return <Car car={currentcar} deleteCar={this.deleteCar} key={currentcar._id}/> 
        })
    }

    render() {
        return (
            <div>

<BasicNavBar />
      <ContactHeader />
        <Container>
            <div className="section profile-content">
                <br /><h3 style={{textAlign:"center"}}>Elérhető autók</h3> <br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Márka</th>
                            <th>Típus</th>
                            <th>Fogyasztás</th>
                            <th>Rendszám</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.carsList()}
                    </tbody>
                </table> 
              <div>
              </div>
            </div>  
        </Container>
      <BasicFooter />
      </div>
        )
    }
}