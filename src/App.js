import React, { Component } from 'react';
import api from './api/coolstuff.js';
import PubsList from './components/PubsList';
class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {'foldersOnIssuu': [], 'bookmarksOnIssuu': [], 'activeDocument': {}}
  }

  getPublications = () => {
    console.log(api)
    let additional_params = {
      format: 'json'
    }
    let params = new api.create_base_parameters_obj('issuu.folders.list', api.api_key, additional_params)
    console.log(params)
    let api_call = api.add_custom_params(params)
    api.call_issuu(api_call).then((res) => {
      this.setState({'foldersOnIssuu': res.data.rsp._content.result._content})
      console.log(this.state)

    }).catch((err) => {
      console.log(err)
    })
  }

  getListOfBookmarks = (folderId) =>{
    let additional_params = {
      format: 'json',
      folderId: folderId
    }
    let params = new api.create_base_parameters_obj('issuu.bookmarks.list', api.api_key, additional_params)
    let api_call = api.add_custom_params(params)
    api.call_issuu(api_call).then((res)=>{
      this.setState({'bookmarksOnIssuu': res.data.rsp._content.result._content})
      console.log(this.state)
    }).catch((err)=>{console.log(err)})
  }

  getListOfDocumentEmbeds = (documentId) =>{
    let additional_params = {
      format: 'json',
      documentId: documentId
    }
    let params = new api.create_base_parameters_obj('issuu.document_embeds.list', api.api_key, additional_params)
    const api_call = api.add_custom_params(params)
    api.call_issuu(api_call).then((res)=>{
      this.setState({activeDocument: res.data.rsp._content.result._content[0].documentEmbed})
      console.log(this.state)
    }).catch((err)=>{
        console.log(err)
    })
  }

  render() {
    return (
      <div className="ui container">
          <PubsList getPublications={this.getPublications} folders={this.state.foldersOnIssuu} bookmarks={this.state.bookmarksOnIssuu} getListOfBookmarks={this.getListOfBookmarks} getListOfDocumentEmbeds={this.getListOfDocumentEmbeds}></PubsList>
      </div>
    );
  }
}

export default App;
