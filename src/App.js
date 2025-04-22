import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';

const App = () => {

  const [getContacts, setContacts] = useState([])

  return (
    <div className="App">

      <Navbar />
      <Contacts contacts={getContacts} />

    </div>
  );
}

export default App;