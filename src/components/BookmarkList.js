import React from 'react';

class BookmarkList extends React.Component{
    
    constructor(props){
        super(props)
    }


    
    render(){
        console.log(this.props)
        
        return(
            <div>{this.props.children}</div>
        )
    }
}

export default BookmarkList