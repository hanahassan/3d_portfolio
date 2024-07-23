import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { Home, About, Projects, Contact, Resume } from './pages'; // Ensure all components are correctly imported
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/resume' && <Navbar />} {/* Conditionally render Navbar */}
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
      {location.pathname !== '/resume' && <Footer />} {/* Conditionally render Footer */}
    </>
  );
};

const App = () => {
  return (
    <main className='bg-slate-300/20 flex flex-col min-h-screen h-full'>
      <Router>
        <MainContent />
      </Router>
    </main>
  );
};

export default App;
