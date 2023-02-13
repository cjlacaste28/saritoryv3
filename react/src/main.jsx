import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ProSidebarProvider} from 'react-pro-sidebar';
import App from './App'
import './index.css'
import router from './router.jsx'
import { ContextProvider } from './context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </ProSidebarProvider>
  </React.StrictMode>,
)
