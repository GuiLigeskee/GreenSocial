import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
