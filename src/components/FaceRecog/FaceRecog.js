import React from 'react';

const FaceRecog = ({imageURL})=>{
    return(
      <div className="Face__origin">
          <img crossOrigin ='' className="Face" src={imageURL} alt="imageURL" />
          <h1 id="Face__info" className="u-center-text">Image detection can't be carried out due to some problems.Sorry for the inconvinience</h1>
      </div>
    );
}

export default FaceRecog