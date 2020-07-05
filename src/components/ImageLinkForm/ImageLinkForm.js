import React from 'react';

const ImageLinkForm = ({ onInput,onSubmit }) => {
    return(
        <div className="LinkForm">
            <p className="f3 u-center-text">
                This magic Brain will detect faces in your pictures.Give it a try.
            </p>
            <div className="LinkForm__detect pa4 br3 shadow-5 u-center-text">
                <input onChange= {onInput} className="f4 pa2 w-70" id="ImageInput" type = "text" placeholder = "Enter the picture's url"/>
                <button onClick={onSubmit} className=" w-30 grow f4 link ph3 pv2 dib white bg-light-purple LinkForm--button">Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm
