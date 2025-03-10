import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './components/name';
// import Image from './components/image';
import Description from './components/description';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <card style={{ width: '18rem' }}>
    <Card.Image variant="top"src="holder.js/100px180" />
    <Card.Body>
      <Card.Title><Name/></Card.Title>
      <Card.TexT>
        <Description/>
      </Card.TexT>
     
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </card>
  );
}


export default App;





