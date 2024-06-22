import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Newscard from './components/Newscard/Newscard.jsx'
import General from './components/General/General.jsx'
import Business from './components/Business/Business.jsx'
import Entertainment from './components/Entertainment/Entertainment.jsx'
import Health from './components/Health/Health.jsx'
import Science from './components/Science/Science.jsx'
import Technology from './components/Technology/Technology.jsx'
import Sports from './components/Sports/Sports.jsx'
import NavigationButtons from './components/NavigationButtons/NavigationButtons.jsx'
import World from './components/World/World.jsx'
import Nation from './components/Nation/Nation.jsx'

const routes = [
  { path: "/", element: <General /> },
  { path: "business", element: <Business /> },
  { path: "world", element: <World /> },
  { path: "nation", element: <Nation /> },
  { path: "entertainment", element: <Entertainment /> },
  { path: "health", element: <Health /> },
  { path: "science", element: <Science /> },
  { path: "sports", element: <Sports /> },
  { path: "technology", element: <Technology /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes.map((route, index) => ({
      ...route,
      element: (
        <>
          {route.element}
          <NavigationButtons routes={routes} currentIndex={index} />
        </>
      ),
    })),
  },
]);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <General/>,
//       },
//       {
//         path:"business",
//         element: <Business/>,
//       },
//       {
//         path: "entertainment",
//         element: <Entertainment/>,
//       },
//       {
//         path: "health",
//         element: <Health/>,
//       },
//       {
//         path: "science",
//         element: <Science/>,
//       },
//       {
//         path: "sports",
//         element: <Sports/>
//       },
//       {
//         path: "technology",
//         element: <Technology/>,
//       },
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
