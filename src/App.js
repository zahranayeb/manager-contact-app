import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import Example from './components/Example';

const App = () => {

  const [getContacts, setContacts] = useState([])

  return (
    <div className="App">
      <Example />
      <Navbar />
      <Contacts contacts={getContacts} />

    </div>
  );
}

export default App;