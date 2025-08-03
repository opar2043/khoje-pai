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
import Category from './Component/Stall/Category.jsx';
import CategoryView from './Component/Stall/CategoryView.jsx';
import Edit from './Component/Dashboard/Advertise/Edit.jsx';
import User from './Component/Dashboard/User/User.jsx';
import AuthProvider from './Component/Firebase/AuthProvider.jsx';
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
      {
        path: '/stalls/:sub',
        element: <Category></Category>
      },
      {
        path: '/stalls/:sub/:id',
        element: <CategoryView></CategoryView>
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
    },
    {
      path: "/dashboard/user",
      element: <User></User>
    },
    {
      path: "/dashboard/edit/:id",
      element: <Edit></Edit>
    }
  ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
