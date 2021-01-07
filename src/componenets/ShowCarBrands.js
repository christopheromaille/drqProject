import React from 'react';
import { Cars } from './cars';
import axios from 'axios';

export class ShowCarBrands extends React.Component{

    constructor(){
        super();

        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
    }

    state = {
        teams:[ ]
            
    };

    componentDidMount(){
        axios.get('http://localhost:4002/api/cars')
        .then((response) => {
            this.setState({ cars: response.data });
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    ReloadDataMethod(){
        axios.get('http://localhost:4002/api/cars')
        .then((response) => {
            this.setState({ cars: response.data });
        })
        .catch(function (error) {
            console.log(error)
        });
    }
    

    render(){
        return(
<div className="App">
    <h1>This is Cars page</h1>
    <Cars cars={this.state.cars} ReloadDataMethod={this.ReloadDataMethod}></Cars>
</div>

        );
    }
}

export default ShowCarBrands;