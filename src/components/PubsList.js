import React from 'react';
import PubFolder from './PubFolder';
import PubBookmark from './PubBookmark';

class PubsList extends React.Component{
    
    render(){   
        const pubFolders = this.props.folders.map((folder)=>{
            return <PubFolder key={folder.folder.folderId} folderName={folder.folder.name} items={folder.folder.items} dataId={folder.folder.folderId} getListOfBookmarks={this.props.getListOfBookmarks}></PubFolder>
        })
        const pubBookmarks = this.props.bookmarks.map((bookmark)=>{
            return <PubBookmark bookmark={bookmark.bookmark} key={bookmark.bookmark.documentId} addClickedBookToState={this.props.addClickedBookToState}></PubBookmark>
        })


        return(
            <div>
                <div>{pubBookmarks}</div>
                <button onClick={this.props.getPublications} className='large ui button'>Get List Of Pubs</button>
                <div>{pubFolders}</div>
            </div>
        );

    
    }
}

export default PubsList
