import React from 'react';
import PubFolder from './PubFolder';
import PubBookmark from './PubBookmark';

class PubsList extends React.Component{
    constructor(props){
        super(props)
    }
    

    render(){   
        const pubFolders = this.props.folders.map((folder)=>{
            console.log(folder)
            return <PubFolder key={folder.folder.folderId} folderName={folder.folder.name} items={folder.folder.items} dataId={folder.folder.folderId} getListOfBookmarks={this.props.getListOfBookmarks}></PubFolder>
        })
        const pubBookmarks = this.props.bookmarks.map((bookmark)=>{
            console.log(bookmark)
            return <PubBookmark key={bookmark.bookmark.documentId} title={bookmark.bookmark.title} createdAt={bookmark.bookmark.created} description={bookmark.bookmark.description} dataId={bookmark.bookmark.documentId} getListOfDocumentEmbeds={this.props.getListOfDocumentEmbeds}></PubBookmark>
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
