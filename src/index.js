import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";



const firebaseConfig ={
  apiKey: "AIzaSyDyatTO5qxVzfrP8ZmxL5MG28vawWPLhtM",
  authDomain: "evernote-app-3a316.firebaseapp.com",
  projectId: "evernote-app-3a316",
  storageBucket: "evernote-app-3a316.appspot.com",
  messagingSenderId: "657012445346",
  appId: "1:657012445346:web:20dd4c9c5ca242b8c787fb",
  measurementId: "G-F31KL79ZT2"
} ;


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote=container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
