import React, { Component } from 'react';
import { Table, Card } from "react-bootstrap";
import logo from './logo.svg';
import './App.css';

const App = () => {
  function queryItem() {
    console.log("in query");
    const testItem = document.querySelector("div[id=ldp-address]");
    console.log("testItem",testItem);
  }
  return (
    <div className="App">
      <Card>
        <Card.Img style={{ width: "250px", height: "200px"}} variant="top" src="https://ap.rdcpix.com/1e19c9cab8dfeae300a06cc9bfb47037l-m3144314282xd-w1020_h770_q80.jpg" alt="temp pic" />
        <Card.Body>
          <h1>This would be the address</h1>
          <h4>This would be the description</h4>
          <Table className="tableDetails">
            <tbody>
              <tr>
                <td className="tableLeft">Cost:</td>
                <td className="tableRight">$Amount</td>
              </tr>
              <tr>
                <td className="tableLeft">HOA Fees:</td>
                <td className="tableRight">$/Month</td>
              </tr>
              <tr>
                <td className="tableLeft">Property Tax:</td>
                <td className="tableRight">$/Month</td>
              </tr>
              <tr>
                <td className="tableLeft">Home Insurance:</td>
                <td className="tableRight">$Amount</td>
              </tr>
              <tr>
                <td className="tableLeft">Principal & Interest:</td>
                <td className="tableRight">$Amount</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
