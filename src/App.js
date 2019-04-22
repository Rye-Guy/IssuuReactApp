import React, { Component } from 'react';
import api from './api/coolstuff.js';
import PubsList from './components/PubsList';
import BookmarkList from './components/BookmarkList';
import ActivePub from './components/ActivePub';
import PubBookmark from './components/PubBookmark.js';
import { timingSafeEqual } from 'crypto';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {'config': {
      'stackIds': ['6fce4bc8-130e-47de-82bb-a62aadb504fb', '9d9b385f-cd91-441f-bf47-8df07b25f228', 'e6f5c5a3-5623-4322-89ca-0ab60837d8b8', '26c36c2d-743d-4246-9e75-4640ef847f28', 'f6d7c651-a145-4bd1-9923-7ef8c96a998d', '8d9b8f08-ae37-4154-96d9-0da4262297cd']
    }, 'foldersOnIssuu': [], 'bookmarksOnIssuu': [], 'activeDocument': {}}
  }

  getPublications = () => {

    const additional_params = {
      format: 'json',
      pageSize: 100,
      folderSortBy: 'created'
    }

    const params = new api.create_base_parameters_obj('issuu.folders.list', api.api_key, additional_params)
    const api_call = api.add_custom_params(params)
    api.call_issuu(api_call).then((res) => {
      this.setState({'foldersOnIssuu': res.data.rsp._content.result._content})
      console.log(this.state)
    }).catch((err) => {
      console.log(err)
    })
  }



  

  getListOfBookmarks = (folderId) =>{
    
    const additional_params = {
      format: 'json',
      folderId: folderId,
      pageSize: 1,
      resultOrder: 'desc',
      bookmarkSortBy: 'created'
    }

    const params = new api.create_base_parameters_obj('issuu.bookmarks.list', api.api_key, additional_params)
    const api_call = api.add_custom_params(params)
    api.call_issuu(api_call).then((res)=>{
      this.setState({'bookmarksOnIssuu': this.state.bookmarksOnIssuu.concat(res.data.rsp._content.result._content)})
    }).catch((err)=>{console.log(err)})
  }

  addClickedBookToState = (book)=>{
    this.setState({'activeDocument': book})
  } 

  componentDidMount(){
    this.getPublications()
    this.state.config.stackIds.map((id)=>{
      this.getListOfBookmarks(id)
    })
  }

  
  render() {
    return (
      <div className="ui container">
          <ActivePub activePub={this.state.activeDocument}></ActivePub>
          <BookmarkList stackIds={this.state.config.stackIds} getDataForBookmark={this.getListOfBookmarks}></BookmarkList>
          <PubsList getPublications={this.getPublications} folders={this.state.foldersOnIssuu} bookmarks={this.state.bookmarksOnIssuu} getListOfBookmarks={this.getListOfBookmarks} addClickedBookToState={this.addClickedBookToState}></PubsList>
      </div>
    );
  }
}

export default App;
