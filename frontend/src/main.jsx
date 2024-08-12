import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import ErrorPage from './error';
import Register from './Pages/Register/Register';
import './index.css';
import PricingPage from './Pages/Pricing/Pricing';
import Dashboard from './Pages/Admin/AdminDashboard';
import AdminLogin from './Pages/Admin/AdminLogin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },

  {
    path: "register",
    element: <Register />,
  },

  {
    path: "pricing",
    element: <PricingPage />,
  },

  { path: "/pricing/:category",
    element: <PricingPage />,
  },
  
  {
    path: "admin/login",
    element: <AdminLogin />,
  },

  {
    path: "admin/dashboard",
    element: <Dashboard />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
