import React from 'react';


class PubBookmark extends React.Component{
    //this.setState({'activeDocument': this.props.bookmark})
    render(){

        return(
            <div onClick={()=> this.props.addClickedBookToState(this.props.bookmark)} className='ui fluid card button item'>
                    <div className="image">
                        <img src={`https://image.issuu.com/${this.props.dataId}/jpg/page_1_thumb_large.jpg`} />
                    </div>
                    <div className="content">
                        <a className="header">{this.props.bookmark.title}</a>
                    </div>
                
            
            </div>
        )
    }

}

export default PubBookmark