import React from 'react';
import './App.css';
import UTMBuilder from './library/components/UTMBuilder';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};


function App() {
  return (
    <Provider template={AlertTemplate} {...options}>
    <div className="App">
        <UTMBuilder />
    </div>
    </Provider>
  );
}

export default App;
