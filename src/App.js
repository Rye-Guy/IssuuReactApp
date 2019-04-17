import React, { Component } from 'react';
import api from './api/coolstuff.js';
import PubsList from './components/PubsList';
import ActivePub from './components/ActivePub';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {'foldersOnIssuu': [], 'bookmarksOnIssuu': [], 'activeDocument': {}}
  }

  getPublications = () => {

    const additional_params = {
      format: 'json'
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
      folderId: folderId
    }

    const params = new api.create_base_parameters_obj('issuu.bookmarks.list', api.api_key, additional_params)
    const api_call = api.add_custom_params(params)
    api.call_issuu(api_call).then((res)=>{
      this.setState({'bookmarksOnIssuu': res.data.rsp._content.result._content})
      console.log(this.state)
    }).catch((err)=>{console.log(err)})
  }

  addClickedBookToState = (book)=>{
    this.setState({'activeDocument': book})
  }

  
  render() {
    return (
      <div className="ui container">
          <ActivePub activePub={this.state.activeDocument}></ActivePub>
          <PubsList getPublications={this.getPublications} folders={this.state.foldersOnIssuu} bookmarks={this.state.bookmarksOnIssuu} getListOfBookmarks={this.getListOfBookmarks} addClickedBookToState={this.addClickedBookToState}></PubsList>
      </div>
    );
  }
}

export default App;
