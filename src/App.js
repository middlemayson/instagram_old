import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/headers/Header';
import Navbar from './components/navbar/Navbar';
import Explore from './pages/explore/Explore';
import Feed from './pages/feed/Feed';
import Profile from './pages/profile/Profile';
import News from './pages/news/News';

import './style/main.css';
import './style/reset.css';
import Following from './pages/following/Following';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/news' element={<News />} />
          <Route path='/following' element={<Following />} />
        </Routes>
        
        <Navbar />
      </Router>
      
    </div>
  );
}

export default App;
