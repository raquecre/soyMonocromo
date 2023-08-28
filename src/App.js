import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import WhatDo from './components/WhatDo';
import OurWork from './components/OurWork';

function App() {
  return (

    
    <div className="bg-opacity-5 bg-gradient-to-r from-fuchsia-300 to-cyan-200">
     <Navbar/>
     <WhatDo/>
     <OurWork/>
    </div>
  );
}

export default App;
