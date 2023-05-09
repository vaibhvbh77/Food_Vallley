import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Error from "./Error";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { useState } from "react";
const InstaMart = lazy(() => import("./components/InstaMart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Vaibhav",
    email: "Vaibhav@gmail.com",
  });
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,

        children: [
          {
            path: "profile",
            element: <Profile name={"Akshay"} age="22" />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/restaurant/:resId", element: <RestaurantDetails /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
