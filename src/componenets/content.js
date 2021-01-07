import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export class Content extends React.Component {


    render() {
        return (
            <div>
                <h2>Hello Welcome</h2>
                <h3>Here you can find reviews for cars and make your own</h3>
                
                {/* here is the code for my the pictures on the homepage i used carousel for
                 the pictures to change */}
               
               {/* found this code online */} 
               
                <Carousel>
                    
                    <Carousel.Item>
                        <img className="d-block w-100 h-10" src="images/backGround1.jpg"></img>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100 h-10" src="images/backGround2.jpg"></img>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100 h-10" src="images/backGround3.jpg"></img>
                    </Carousel.Item>
                </Carousel>

            </div>


        );
    }
}