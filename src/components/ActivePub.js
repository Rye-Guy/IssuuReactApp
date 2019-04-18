import React from 'react';

class ActivePub extends React.Component{

    constructor(props){
        super(props)
        this.myIframe = React.createRef();
    }
    
    componentDidUpdate(){
        
        //this.myIframe.current.src = `//e.issuu.com/embed.html#${this.props.activePub.dataConfigId}`
    }


    makeASweetIframe = () =>{
        if(!this.props.activePub.name){
            return(<div style={{'marginTop': '24px'}}></div>)
        }else{
            return (     
                <div style={{'marginTop': '24px'}}>
                    <h4 className='ui horizontal divider header'>Active Publication <i className="leanpub icon"></i></h4>
                    <iframe ref={this.myIframe} style={{'overflow':'hidden','border': 'none', 'height': '60vh', 'width': '100%'}} src={`https://e.issuu.com/embed.html?&u=wall2wall&d=${this.props.activePub.name}&p=1`}></iframe>
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