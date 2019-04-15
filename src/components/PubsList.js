import React from 'react';
import PubFolder from './PubFolder'
class PubsList extends React.Component{
    constructor(props){
        super(props)
    }
    

    render(){   
        const pubFolders = this.props.folders.map((folder)=>{
            console.log(folder)
            return <PubFolder key={folder.folder.folderId} folderName={folder.folder.name} items={folder.folder.items}></PubFolder>
        })
        return(
            <div>
                <button onClick={this.props.getPublications} className='large ui button'>Get List Of Pubs</button>
                <div>{pubFolders}</div>
            </div>
        );

    
    }
}

export default PubsList
