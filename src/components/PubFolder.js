import React from 'react';

class PubFolder extends React.Component{
    render(){
        console.log(this.props)
        return(
            
            <div>   
                {this.props.folderName}
            </div>
        );
    }
}

export default PubFolder