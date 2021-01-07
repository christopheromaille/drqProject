const express = require('express');
const app = express();
const port = 4002;
const coors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//const path = require('path');

app.use(coors());

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

//.use(express.static(path.join(__dirname, '../build')));
//app.use('/static', express.static(path.join(__dirname, 'build//static')));

//This is the  link to my mongo db server but it did not work and i copied the link from online 
//dont know if i left something out  

/*const myConnectionString ='mongodb+srv://Tedted123:Tedted123@cluster0.ch0dz.mongodb.net/cars?retryWrites=true&w=majority'
mongoose.connect(myConnectionString, ({useNewUrlParser: true}));

const Schema = mongoose.Schema;

var carSchema = new Schema({
    name:String,
    made:String,
    logo:String
});

var CarModel = mongoose.model("car", carSchema);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//gets the cars from the api
app.get('/api/cars', (req, res) => {
    //put in data 


    CarsModel.find((err, data) => {
        res.json(data);
    })
    // res.status(200).json({
    //     message: "Everything is okay",
    //     Cars:mycars});
})
app.get('/api/cars/:id', (req, res) =>{
    console.log(req.params.id);

    TeamModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

// updates team details
app.put('/api/cars/:id', (req, res) => {
    console.log("Update Cars: "+req.params.id);
    console.log(req.body);

    CarsModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, 
        (err, data) => {
            //send the data back
            res.send(data);
        })
})

// Sends new car details to the console
app.post('/api/cars', (req, res)=> {
    console.log("car Recieved!");
    console.log(req.body.name);
    console.log(req.body.made);
    console.log(req.body.logo);

    CarModel.create({
        name:req.body.name,
        founded:req.body.made,
        crest:req.body.logo
    })

    res.send("item added");
})

//allows a car to be deleted from the server
app.delete('/api/cars/:id', (req, res) =>{
    console.log("Delete Car: "+ req.params.id);

    CarModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

/*
app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})