import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './components/name';
 import Image from './components/image';
import Description from './components/description';
import Price from './components/price';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Card style={{ width: '18rem' }}>
   <Image/>
    <Card.Body>
      <Card.Title><Name/></Card.Title>
      <Card.Text>
        <Description/>
      </Card.Text>
      <Price/>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  );
}


export default App;





