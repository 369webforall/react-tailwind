import React from 'react';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ErrorPage from './error-page';
import Root from './components/Root';
const router = createBrowserRouter([
  {
    element: <Root />,

    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',

        element: <Home />,
      },

      {
        path: '/about',

        element: <About />,
      },

      {
        path: '/contact',

        element: <Contact />,
      },

      {
        path: '/signin',

        element: <Signin />,
      },
      {
        path: '/signup',

        element: <Signup />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
