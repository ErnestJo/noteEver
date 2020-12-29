import './App.css';
import fire from './fire'
import SidebarComponent from './sidebar/sidebar'
import Editorcomponent from './editor/editor';
import React from 'react'


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      selectedNote: null,
      selectedNoteIndex: null,
      notes: null,
    };
  }


  render(){
    return(<div className="app-container">
        <SidebarComponent></SidebarComponent>
        <Editorcomponent></Editorcomponent>
    </div>)
  }

  componentDidMount = () => {
    fire
      .firestore()
      .collection('notes')
      .onSnapshot(severUpdate => {
        const notes = severUpdate.docs.map(_doc =>{
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes)
        this.setState({notes: notes})
      });
  }
}

export default App;
