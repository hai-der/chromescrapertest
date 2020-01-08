import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const testItem = document.getElementsByClassName("meta-value");
  console.log(testItem);
  return (
    <div className="App">
      <header className="App-header">

        <p>
          This should be an item:
          {/* {
            testItem.foreach(element => {
              return <h1>{element.textContent}</h1>
            });
          } */}
        </p>
      </header>
    </div>
  );
}

export default App;
