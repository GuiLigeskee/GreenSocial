import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter, } from 'react-router-dom';
import './index.css'

// Redux
import {Provider} from 'react-redux';
import {store} from './store.jsx';

// Paginas
import Home from './routes/Home/Home.jsx';
import Login from './routes/Auth/Login.jsx';
import Register from './routes/Auth/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
