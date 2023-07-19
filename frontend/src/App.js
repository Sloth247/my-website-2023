import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import './App.scss';

function App() {
  useEffect(() => {}, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route element={<HomeScreen />} path="/" />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
