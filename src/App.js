import './App.css';
import Navbar from './components/Navbar';
import WhatDo from './components/WhatDo';
import OurWork from './components/OurWork';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-opacity-5 bg-gradient-to-r from-fuchsia-300 to-cyan-200 pb-20">
      <Navbar />
      <WhatDo />
      <OurWork />
      <Footer/>
    </div>
  );
}

export default App;
