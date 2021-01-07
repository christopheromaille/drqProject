import React from 'react';
import axios from 'axios';

 export class CreateCarBrands extends React.Component{

    constructor(){
        super();
        //this will submits and saves data for new car 
        this.onSubmit = this.onSubmit.bind(this);

        this.onNewName = this.onNewName.bind(this);

        this.onNewMade = this.onNewMade.bind(this);
        
        this.onNewLogo = this.onNewLogo.bind(this);

        this.state ={
            Name:'',
            Made:'',
            Logo:''
        }
    }
    //this will store new car name
    onNewName(e){
        this.setState({
            Name: e.target.value
        })
    }
    //this will store new  year for the car
    onNewMade(e){
        this.setState({
            Made: e.target.value
        })
    }
    //this will store the Logo for the car
    onNewLogo(e){
        this.setState({
            Logo: e.target.value
        })
    }
    //when the Add car button is press an alert will  pop up with the details that was submited 
    onSubmit(e){
        e.preventDefault();

        alert("Car: " +this.state.Name + " Made " + this.state.Made + " Logo " + this.state.Logo);

        const newCar = {
            name: this.state.Name,
            made: this.state.Made,
            logo: this.state.Logo
        }
        //Sends the new team to the server
        axios.post('http://localhost:4002/api/Cars',newCar)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })
    }


    render(){
        return(
            //Here is where you input for the new car to be created
<div className='App'>
    {/* found this code from pervios labs and online  */}

    <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Add A New Car </label>
            <input type='text' className='form-control' value={this.setState.Name}
            onChange={this.onNewName}></input>
        </div>


        <div className="form-group">
        <label>Add Year it was Manufactured</label>
            <input type='text' className='form-control' value={this.setState.Made}
            onChange={this.onNewMade}></input>
        </div>


        <div className="form-group">
            <label>the Car Logo</label>
            <textarea type='text' className='form-control' value={this.state.Logo}
            onChange={this.onNewLogo}></textarea>
        </div>


        <div className="form-group">
            <input type = "submit" value="Add Car" className='btn-btn-primary'></input>
        </div>


    </form>
    
</div>

        );
    }
}

export default CreateCarBrands;
