// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ShopPage from './page/shop-page/shop-page.jsx';
// import Header from './components/Header.jsx';
// import SignIn from './page/sign-in/SignIn.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/home',
//     element: <div>Home Page</div>
//   },
//   {
//     path: '/about',
//     element: <div>About Us</div>
//   },
//   {
//     path: '/shop',
//     element: <ShopPage />,
//   },
//   {
//     path: '/shop/:category',
//     element: <ShopPage />,
//   },
//   {
//     path: '/signin',
//     element: <SignIn />,
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}>
//       <Header />
//     </RouterProvider>
//   </StrictMode>
// );




import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShopPage from './page/shop-page/shop-page.jsx';
import MainLayout from './components/MainLayout.jsx';
import SignIn from './page/sign-in/SignIn.jsx';

import productCategories from "./page/product-categories";

//import HomePage from "./page/HomePage/HomePage.component.jsx";
import HomePage from "./page/HomePage.component.jsx";

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ShopPage from './page/shop-page/shop-page.jsx';
// import Header from './components/Header.jsx';
// import SignIn from './page/sign-in/SignIn.jsx';


const router = createBrowserRouter([
  {
    element: <MainLayout />, // Wrap all routes with MainLayout
    children: [
      { path: '/home', element: <div>Home Page</div> },
      { path: '/about', element: <div>About Us</div> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/shop/:category', element: <ShopPage /> },
      { path: '/signin', element: <SignIn /> },
      {
        path: "/",
        element: <HomePage  productCategories={productCategories.sections}/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
