import React from 'react';
import brain from './brain.png';
import Tilt from 'react-tilt';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className = "Tilt br2 shadow-2" options = {{max: 150}}>
                <div className="Tilt-inner pa3">
                    <img className= "Tilt__image" src= {brain} alt = "brain img" />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo