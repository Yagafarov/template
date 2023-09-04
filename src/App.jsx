import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login'
import About from './pages/About'
import Tutorial from './pages/Tutorial'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Write from './pages/Write'
import NavbarM from './components/NavbarM'
import FooterM from './components/FooterM'
import './App.css'

const Layout = () => {
  return (
    <>
      <NavbarM />
      <div className='my-5 py-3'>
        <Outlet />
      </div>
      <FooterM />
    </>
  )
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/tutorial',
          element: <Tutorial />
        },
        {
          path: '/posts',
          element: <Posts />
        },
        {
          path: '/write',
          element: <Write />
        },
      ]
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
  ]
);

const App = () => {
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App