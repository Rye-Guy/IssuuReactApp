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
        console.log(data)

        if(!data.hasOwnProperty('dataConfigId')){
            return(<div>Nothing to see here</div>)
        }else{
            return (<iframe ref={this.myIframe} src={`//e.issuu.com/embed.html#${data.dataConfigId}`}> </iframe>)
        }
    }

    render(){
            return (           
                <div>
                    {this.makeASweetIframe(this.props.activePub)}
                </div>
            )
        }
}    

export default ActivePub