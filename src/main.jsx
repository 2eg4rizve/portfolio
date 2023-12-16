import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import HomePage from './pages/HomePage/HomePage';
import AuthProvider from './AuthProvider/AuthProvider';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import About from './pages/About/About';
import CP from './pages/CP/CP';
import WD from './pages/WD/WD';
import Education from './pages/Education/Education';
import ContactMe from './pages/ContactMe/ContactMe';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/cp',
        element: <CP></CP>
      },
      {
        path: '/wd',
        element: <WD></WD>
      },
      {
        path: 'education',
        element: <Education></Education>
      },
      {
        path: 'contactMe',
        element: <ContactMe></ContactMe>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
