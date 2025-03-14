import { createBrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Landing,
  Layout,
  NotFound,
  Portfolio,
  Skills,
} from "./components";

const routerConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "skills",
        element: <Skills />,
      },

      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
