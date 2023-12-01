import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Home from './Pages/Home.js';
import Details from './Pages/Details.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" component={Details} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
