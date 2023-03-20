import logo from './logo.svg';
import './App.css';
import Router from './router/router';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
   <Navbar/>
    <div className="main-container">
      <Router/>
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
