import './App.css';
import fire from './fire'
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
    return(<div>Hellow world </div>)
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
