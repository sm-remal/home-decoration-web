import React, { Suspense } from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Products from '../pages/Products/Products';
import Contact from '../pages/Contact/Contact';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import WishList from '../pages/WishList/WishList';
import ProductsDetails from '../pages/ProductsDetails/ProductsDetails';
import Spinner from '../components/Spinner/Spinner';


const fetchPromise = fetch("../furnitureData.json").then(res => res.json())


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
            // loader: () => fetch('furnitureData.json'),
            // Component: Products,
            element: <Suspense fallback={<Spinner></Spinner>}>
                <Products fetchPromise={fetchPromise}></Products>
            </Suspense>
        },
        { 
            path: "products/:id",
            // loader: () => fetch(`furnitureData.json`),
            // Component: ProductsDetails,
            element: <Suspense fallback={<Spinner></Spinner>}>
                <ProductsDetails fetchPromise={fetchPromise}></ProductsDetails>
            </Suspense>
        },
        {
            path: "about",
            Component: About,
        },
        {
            path: "contact",
            Component: Contact,
        },
        {
            path: "wishlist",
            Component: WishList,
        }
    ]
  },
]);