import React from 'react';


class PubBookmark extends React.Component{
    //this.setState({'activeDocument': this.props.bookmark})
    render(){

        return(
            <div onClick={()=> this.props.addClickedBookToState(this.props.bookmark)} className='ui green button item'>{this.props.bookmark.title}</div>
        )
    }

}

export default PubBookmark