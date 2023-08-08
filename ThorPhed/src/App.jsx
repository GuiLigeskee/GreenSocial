// CSS
import './App.css';

// Router
import { Outlet, Link } from 'react-router-dom';

// Hooks
import {useAuth} from './hooks/useAuth'

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  const  {auth, loading} = useAuth();

  if(loading) {
    return <p>Carregando...</p>
  }

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
