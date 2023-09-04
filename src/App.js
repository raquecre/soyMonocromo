import './App.css';
import Navbar from './components/Navbar';
import WhatDo from './components/WhatDo';
import OurWork from './components/OurWork';
import Footer from './components/Footer';
import InfiniteScroll from './components/InfiniteScroll';


function App() {
  return (
    <div className="bg-opacity-5 bg-gradient-to-r from-fuchsia-300 to-cyan-200">
      <Navbar />
      <WhatDo />
      <OurWork />
      <InfiniteScroll/>
      <Footer/>
    </div>
  );
}

export default App;
