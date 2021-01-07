import { render } from '@testing-library/react';
import React from 'react';
//import axios
import axios from 'axios';

export class Edit extends React.Component {

    constructor() {
        super();

        
        // onSubmit - gets called when the button on our page is clicked 
        this.onSubmit = this.onSubmit.bind(this);

        this.onChangeName = this.onChangeName.bind(this);

        this.onChangeMade = this.onChangeMade.bind(this);

        this.onChangeLogo = this.onChangeLogo.bind(this);

        this.state = {
            Name: '',
            Made: '',
            Logo: ''
        }
    }

    componentDidMount(){

        //this pulls the parameter out 

        console.log(this.props.match.params.id);

        axios.get('http://localhost:4002/api/cars/' + this.props.match.params.id)
        //callback function

        .then(response => {
            this.setState({
                _id:response.data._id,
                Name:response.data.name,
               Made:response.data.made,
                Logo:response.data.logo
            })
        })
        
        .catch((error) =>{
            
            console.log(error);
        });
    }

    
    // if the  value is changed it will update the state
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeMade(e){
        this.setState({
            Made: e.target.value
        });
    }

    
    onChangeLogo(e){
        this.setState({
            Logo: e.target.value
        });
    }

   
    
    onSubmit(e) {
        e.preventDefault();
        alert("Cars: " + this.state.Name + " " + this.state.Made + " " + this.state.Logo);

        //this is to make new objects 
        const newTeam = {
            name: this.state.Name,

            made: this.state.Made,

            logo: this.state.Logo,

            _id:this.state._id
        }

        axios.put('http://localhost:4002/api/cars/' + this.state._id,newTeam)
    
        .then(res =>{
            console.log(res.data)
        })
        .catch();

        
    }

    // onSubmit - when the button is clicked it gonna invoke thisOnSubmit

    render() {
        return (
            // code was found online previous labs and youtube video to edit it cause was not working 
            // the first timie

            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Car Name: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>



                    <div className='form-group'>
                        <label>Add Year Made: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Made}
                        onChange={this.onChangeMade}></input>
                    </div>



                    <div className='form-group'>
                        <label>Team Logo: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Logo}
                        onChange={this.onChangeLogo}>
                        </textarea>
                    </div>


                    <div className='form-group'>
                        <input type='submit'
                            value='Save Car'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}