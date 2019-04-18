import React from 'react';
import PubFolder from './PubFolder';
import PubBookmark from './PubBookmark';
import LoadingScreen from './LoadingScreen';

class PubsList extends React.Component{


    doWeHaveData = (valueToCheck, data, h4value, iconType) =>{
        if(iconType !== 'folder' && valueToCheck === 0){
            return <div><h2 style={{'textAlign': 'center'}}>Please Pick A Stack!</h2></div>
        }
        else if(valueToCheck < 1){
            return <LoadingScreen></LoadingScreen>
        }
        else{
            return(
                <div>
                    <h4 className='ui horizontal divider header'>{h4value}  <i className={iconType + " icon"}></i></h4>
                    <div>{data}</div>
                </div>
            )
        }
    }
    render(){   
        const pubFolders = this.props.folders.map((folder)=>{
            return <PubFolder key={folder.folder.folderId} folderName={folder.folder.name} items={folder.folder.items} dataId={folder.folder.folderId} getListOfBookmarks={this.props.getListOfBookmarks}></PubFolder>
        })



        const pubBookmarks = this.props.bookmarks.map((bookmark)=>{
            return <PubBookmark bookmark={bookmark.bookmark} key={bookmark.bookmark.documentId} addClickedBookToState={this.props.addClickedBookToState}></PubBookmark>
        })


        return(
            
            <div>
                <div style={{'marginBottom': '24px', 'marginTop': '24px'}}>{this.doWeHaveData(this.props.bookmarks.length, pubBookmarks, 'Issuu Publications In Stack', 'book')}</div>
                {this.doWeHaveData(this.props.folders.length, pubFolders, 'Issuu Stacks', 'folder')}
            </div>
        );
    }
}

export default PubsList
