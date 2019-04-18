import React from 'react';

const LoadingScreen = () =>{
    return (
        <div>
            <div className="ui segment"  style={{'border': 'none', 'boxShadow': 'none'}}>
                    <div style={{'border': 'none'}} className="ui active centered inline loader"></div>
                    
                <p></p>
            </div>
        </div>
    )
}

export default LoadingScreen