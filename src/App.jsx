import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return ( 
    <main className='bg-slate-300/20 flex flex-col min-h-screen h-full'>
      <Router>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
