import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirebaseContext from "../src/context/firebase";
import { firebase, FieldValue } from "../src/lib/firebase";
import App from './App';



ReactDOM.render(
  <React.StrictMode>
      <FirebaseContext.Provider value={{firebase,FieldValue}}>
      <App />
       </FirebaseContext.Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

