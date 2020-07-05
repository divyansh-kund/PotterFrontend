import React from 'react';

const Rank = ({name,entries}) => {
    return(
        <div className= "u-center-text">
            <div className="white f3">
                {`${name} Your entry count is`}
            </div>
            <div className="white f1">
                {entries}
            </div>
        </div>
    );
}

export default Rank