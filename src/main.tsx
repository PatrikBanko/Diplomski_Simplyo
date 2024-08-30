import * as React from 'react'
import Pocetna from './pages/Pocetna.tsx'
import Simplifikator from './pages/Simplifikator.tsx'
import Povijest from './pages/Povijest.tsx'
import './index.css'

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SimplifiedTextProvider } from './components/SimplificiraniTekstContext.tsx'

// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Pocetna />,
  },
  {
    path: "/simplifikator",
    element: <Simplifikator />,
  },
  {
    path: "/povijest",
    element: <Povijest />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SimplifiedTextProvider>
      <RouterProvider router={router} />
    </SimplifiedTextProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
