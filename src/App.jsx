import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Write from './pages/Write'
import NavbarM from './components/NavbarM'
import FooterM from './components/FooterM'
import './App.css'

const Layout =()=>{
  return (
    <>
    <NavbarM/>
    <Outlet/>
    <FooterM/>
    </>
  )
}

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/posts',
          element:<Posts/>
        },
        {
          path:'/write',
          element:<Write/>
        },
      ]
    },
    {
      path:"/register",
      element: <Register/>
    },
    {
      path:"/login",
      element: <Login/>
    },
  ]
);

const App = () => {
  return (
   <>
   <div className="container">

   <RouterProvider  router={router} />
   </div>
   </>
  )
}

export default App