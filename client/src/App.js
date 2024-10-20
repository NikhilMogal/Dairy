import Footer from './components//Footer';
import Navbar from './components//Navbar';
import About from './pages/About/About';
import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reviews from './pages/Reviews/Reviews';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          {/* About route */}
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <Explore/>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
