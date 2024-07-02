import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./css/global.css" // just import the global css
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import { UserPage } from './pages/UserPage';
import { BlogPost } from './pages/BlogPost';
const router = createBrowserRouter([
  {
    path : '/',
    element: <App />
  },
  {
    path : '/user',
    element : <UserPage />
  },
  {
    path: '/blog',
    element : <BlogPost />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App> </App>  only do this when you are passing a child component*/}
    <RouterProvider router={router}/>
  </React.StrictMode>
)
