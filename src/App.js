import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/headers/Header';
import Navbar from './components/navbar/Navbar';
import Explore from './pages/explore/Explore';
import Feed from './pages/feed/Feed';
import './style/main.css';
import './style/reset.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/explore' element={<Explore />} />
          
        </Routes>
        
        <Navbar />
      </Router>
      
    </div>
  );
}

export default App;
