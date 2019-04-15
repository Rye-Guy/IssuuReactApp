import React from 'react';


class PubBookmark extends React.Component{
    render(){
        return(
            <div onClick={()=>this.props.getListOfDocumentEmbeds(this.props.dataId)} className='ui green button'>{this.props.title}</div>
        )
    }

}

export default PubBookmark