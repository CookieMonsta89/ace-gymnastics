import React from "react";
import "./App.css";
import tumbling from "./assets/tumbling.gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tumbling} />
        ACE GYMNASTICS!! COMING SOON!!
        <div>
          <h3>Open House:</h3>
          <p>December 7th, 1pm - 3pm</p>
        </div>
        <div className='icon-logos'>
          <a href='mailto: office@ace-gymnastics.com'><FontAwesomeIcon icon={faEnvelope} color='white' /></a>
          <a href='https://www.facebook.com/ACE-Gymnastics-101806134601903/' target='_blank'><FontAwesomeIcon icon={faFacebookSquare} color='white' /></a>
          <a href='https://www.instagram.com/ace.gymnastics/' target='_blank'><FontAwesomeIcon icon={faInstagram} color='white' /></a>
        </div>
      </header>
    </div>
  );
}

export default App;
