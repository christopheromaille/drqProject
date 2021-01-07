

import React from 'react';


export class Reviews extends React.Component {


    render() {
        return (
            <div>
                {/* this are the links for the videos */}
                <p>This weeks Reviews</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2ajatwrK1sw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/q3n-mPuD8iA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xUOhJux8iEc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Qa1h8pP40vE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/o86qjnOmyXs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        );
    }
}