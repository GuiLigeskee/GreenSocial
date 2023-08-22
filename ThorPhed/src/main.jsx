import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Navigate, RouterProvider, createBrowserRouter, } from 'react-router-dom';
import './index.css'

// Redux
import {Provider} from 'react-redux';
import {store} from './store';

// Paginas
import Home from './routes/Home/Home.jsx';
import Login from './routes/Auth/Login.jsx';
import Register from './routes/Auth/Register.jsx';
import EditProfile from './routes/EditProfile/EditProfile.jsx';
import Profile from './routes/Profile/Profile.jsx';
import Photo from './routes/Photo/Photo.jsx';
import Search from './routes/Search/Search.jsx';

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
      },
      {
        path: "/profile",
        element: <EditProfile/>
      },
      {
        path: "/users/:id",
        element: <Profile/>
      },
      {
        path: "/photos/:id",
        element: <Photo/>
      },
      {
        path: "/search",
        element: <Search/>
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
