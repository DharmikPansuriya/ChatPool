import { Button } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Route path="/" component={}/> */}
      <Route path="/chats" />
    </div>
  );
}

export default App;
