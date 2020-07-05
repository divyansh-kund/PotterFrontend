import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
        return(
            <nav className = "tp-right">
                <p onClick={()=>onRouteChange('signout')} className='f3 link dim black pa3 pointer underline'>Sign out</p>
            </nav>
        );
    }else {
        return(
            <div>
                <nav className = "tp-right">
                    <p onClick={()=>onRouteChange('signin')} className='f3 link dim black pa3 pointer underline'>Sign In</p>
                    <p onClick={()=>onRouteChange('register')} className='f3 link dim black pa3 pointer underline'>Register</p>
                </nav>
            </div>
        );
    }
}

export default Navigation