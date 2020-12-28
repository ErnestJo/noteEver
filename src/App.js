
import './App.css';
import React from 'react'

const firebase = require('firebase');
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
    return(<div>Hellow world </div>)
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(severUpdate => {
        const notes = severUpdate.docs.map(_doc =>{
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        this.setState({notes: notes})
      });
  }
}

export default App;
