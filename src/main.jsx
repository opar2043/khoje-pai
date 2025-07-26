import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import Error from './Component/Root/Error.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Root/Home.jsx';
import {
  QueryClient,
  QueryClientProvider,  
} from '@tanstack/react-query'
import Root from './Component/Root/Root.jsx';
import Login from './Component/Firebase/Login.jsx';
import Register from './Component/Firebase/REgister.jsx';
import Advertise from './Component/Dashboard/Advertise/Advertise.jsx';
import View from './Component/Stall/View.jsx';
import AllAdvertise from './Component/Dashboard/Advertise/AllAdvertise.jsx';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/stall/:id',
        element: <View></View>
      },
    ]
  },
{
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
    {
      path: "/dashboard/advertise",
      element: <Advertise></Advertise>
    },
    {
      path: "/dashboard/alladvertise",
      element: <AllAdvertise></AllAdvertise>
    }
  ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
