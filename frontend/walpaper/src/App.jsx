// src/App.jsx
import  { useState } from 'react';
import Navbar from './components/Navbar';
import Images from './components/Images';

function App() {
  const [toggleSearch, setToggleSearch] = useState(false); // State to manage the search input visibility

  return (
    <>
      <Navbar toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
      <Images toggleSearch={toggleSearch} />
    </>
  );
}

export default App;
