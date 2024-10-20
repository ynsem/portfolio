import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

// Импортируйте компоненты проектов
import Createx from './projects/createx' // HTML проект
// import Project2 from './projects/project2/App'; // React проект
// import Project3 from './projects/project3/index.html'; // HTML проект для Vue
// import Project4 from './projects/project4/App.svelte'; // Svelte проект

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} /> */}
        <Route path="/projects/createx" element={<Createx />} />
        {/* <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/projects/project3" element={<Project3 />} />
        <Route path="/projects/project4" element={<Project4 />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
