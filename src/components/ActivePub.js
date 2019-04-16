import React from 'react';

class ActivePub extends React.Component{

    constructor(props){
        super(props)
        this.myIframe = React.createRef();
    }
    
    componentDidUpdate(){

        //this.myIframe.current.src = `//e.issuu.com/embed.html#${this.props.activePub.dataConfigId}`
        console.log('You need to do something now!')
    }

    makeASweetIframe = (data) =>{
        console.log(this.myIframe)
        if (this.myIframe.current === null){
            return (
                <iframe ref={this.myIframe} src={`//e.issuu.com/embed.html#${data.dataConfigId}`}></iframe>
                )        
        }
        else if(this.myIframe.current){
           this.myIframe.current.remove()
            return (
            <iframe ref={this.myIframe} src={`//e.issuu.com/embed.html#${data.dataConfigId}`}></iframe>
            )
    }
        
    }

    render(){
        if(this.props.activePub.id){
            console.log(this.props)
            return (           
                <div onClick={()=> this.props.getHTMLForDocumentEmbed(this.props.activePub.id)}>
                    {this.makeASweetIframe(this.props.activePub)}
                </div>
            )

        }else{
            return(
                <div>
                      {this.makeASweetIframe(this.props.activePub)}
                </div>
            )
        }
    }    
}

export default ActivePub