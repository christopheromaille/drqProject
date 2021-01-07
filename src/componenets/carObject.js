import React from 'react';

import Card from 'react-bootstrap/Card';

import axios from 'axios';

import {Link  } from "react-router-dom";

import Button from 'react-bootstrap/Button';




export class CarObject extends React.Component {

    constructor(){
    super();

    this.DeleteCar = this.DeleteCar.bind(this);
    }



    DeleteCar(e){
    e.preventDefault();
        console.log("Deleted: " + this.props.car._id);

            axios.delete("http://localhost:4002/api/cars/" + this.props.car._id)
        .then(()=>{
            this.props.ReloadDataMethod();
        })
        .catch();
    }

    render() {
        return (
            // code was found on youtube
            <div>

                <Card>

                    <Card.Header>{this.props.car.name}</Card.Header>

                <Card.Body>

                        <blockquote className="blockquote mb-0">

                            <img src={this.props.car.logo} width="200" height="200"></img>

                            <footer className="blockquote-footer">

                                {this.props.car.made}

                            </footer>

                        </blockquote>
                        
                </Card.Body>

                    <Link to ={"/edit/" + this.props.car._id} className="btn btn-primary">Edit</Link>
                    
                    <Button variant="danger" onClick={this.DeleteCar}>Delete</Button>

                </Card>

            </div>

        );
    }
}
