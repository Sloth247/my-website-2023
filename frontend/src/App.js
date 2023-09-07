import React, { useEffect, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { listProjects } from './actions/projectActions';
import { listSkills } from './actions/skillActions';

import ScrollToHashElement from './components/ScrollToHashElement';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

const HomeScreen = lazy(() => './screens/HomeScreen');

function App() {
  const dispatch = useDispatch();

  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList;

  const skillList = useSelector((state) => state.skillList);
  const { loading: loadingSkills, error: errorSkills, skills } = skillList;

  useEffect(() => {
    dispatch(listProjects());
    dispatch(listSkills());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <ScrollToHashElement />
        <Header />
        <main className="main">
          <Routes>
            <Route
              element={<HomeScreen projects={projects} skills={skills} />}
              path="/"
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
