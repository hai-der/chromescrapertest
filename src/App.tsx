import React, { useState } from 'react';
import { Table, Card, Button, Form } from "react-bootstrap";
import logo from './logo.png';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function queryItem() {
    console.log("in query");
    const testItem = document.querySelector("div[id=ldp-address]");
    console.log("testItem",testItem);
  }

  function handleNo() {
    alert("Thanks for letting us know. We will resolve the issue shortly.");
  }

  function handleYes() {
    alert("Property has been Added!");
  }

  function handleLogin() {
    setIsAuthenticated(true);
  }

  return (
    <div className="App">
      {isAuthenticated ?
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
            <h2>Does this look Correct?</h2>
            <div className="correctCheck">
              <Button onClick={() => handleNo()}>No?</Button>
              <Button onClick={() => handleYes()}>Yes!</Button>
            </div>
            <Button onClick={() => queryItem()}>Query</Button>
          </Card.Body>
        </Card>
        :
        <Card>
          <Card.Img style={{ width: "250px", height: "200px"}} variant="top" src={logo}/>
          <h3>You don't appear to be logged in!</h3>
          <Form onSubmit={() => handleLogin()}>
            <Form.Control type="email" placeholder="Please enter your email" />
            <Form.Control type="password" placeholder="Please enter your password" />
            <Button type="submit">Log In</Button>
          </Form>
        </Card>
      }
    </div>
  );
}

export default App;
