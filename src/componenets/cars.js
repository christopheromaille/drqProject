import React from 'react';
import { CarObject } from './carObject';

export class Cars extends React.Component{

   
    
    
    render(){
        return this.props.cars.map( (car) => {
            return <CarObject car={car} ReloadDataMethod={this.props.ReloadDataMethod}></CarObject>
        })

    }
}