import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Products from '../pages/Products/Products';
import Contact from '../pages/Contact/Contact';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
        },
        {
            path: "products",
            loader: () => fetch('furnitureData.json'),
            Component: Products,
        },
        {
            path: "about",
            Component: About,
        },
        {
            path: "contact",
            Component: Contact,
        }
    ]
  },
]);