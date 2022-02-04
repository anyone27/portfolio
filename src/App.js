import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import NotFound from './NotFound.js';

function App() {

  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>
          <div className="footer">
          <Footer />
          </div>
        </div>
      </Router>
  );
}

export default App;