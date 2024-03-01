import Header from './components/headers/Header';
import Navbar from './components/navbar/Navbar';
import Feed from './pages/feed/Feed';
import './style/main.css';
import './style/reset.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
      <Navbar />
    </div>
  );
}

export default App;
