
import AboutUs from './components/aboutUs/aboutUs';
import Navbar from './components/navbar/Navbar'
import Blog from './pages/blog/Blog';
import Home from './pages/home/Home'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <Router>
            <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/conocenos" element={<AboutUs />} />
        </Routes>
            
    </Router>
        
   
  )
}

export default App
