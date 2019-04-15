import React from 'react';

class PubFolder extends React.Component{
    render(){
        console.log(this.props)
        return(
            
            <div onClick={()=>this.props.getListOfBookmarks(this.props.dataId)} className="ui primary button" data-id={this.props.dataId}>   
                {this.props.folderName}
            </div>
        );
    }
}

export default PubFolder