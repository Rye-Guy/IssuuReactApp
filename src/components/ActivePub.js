import React from 'react';

class ActivePub extends React.Component{

    constructor(props){
        super(props)
        this.myIframe = React.createRef();
    }
    
    componentDidUpdate(){
        
        //this.myIframe.current.src = `//e.issuu.com/embed.html#${this.props.activePub.dataConfigId}`
    }


    makeASweetIframe = (data) =>{
        if(!this.props.activePub.name){
            return(<div>Nothing to see here</div>)
        }else{
            return (     
                <div>
                    <iframe ref={this.myIframe} style={{'overflow':'hidden','border': 'none', 'height': '30vh', 'width': '20vw'}} src={`https://e.issuu.com/embed.html?embedType=script&u=wall2wall&d=${this.props.activePub.name}&p=1`}></iframe>
                </div>
            )
        }
    }

    render(){
        console.log(this.props)
            return (           
                <div>
                    {this.makeASweetIframe(this.props.activePub)}
                </div>
            )
        }
}    

export default ActivePub