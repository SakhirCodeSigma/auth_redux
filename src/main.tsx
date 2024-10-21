import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactPage from "./pages/ReactPage.tsx";
import VitePage from "./pages/VitePage.tsx";
import Login from "./pages/auth/Login2.tsx";
import Layout from "./Components/Layout.tsx"
import NoPage from "./pages/NoPage.tsx";
import AppLayout from "./Components/AppLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";

import { Provider } from 'react-redux'
import store from './pages/store.tsx'

const theme = createTheme({


});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider theme={theme}>
          <BrowserRouter>
              <Provider store={store}>
              <Routes>
                  <Route path="/" element={< App />}></Route>
                  <Route path="react" element={< ReactPage />}></Route>
                  <Route path="vite" element={< VitePage />}></Route>
                  <Route path="login" element={< Login />}></Route>
                  <Route path="layout"  element={< Layout children={undefined} title={''} />}></Route>
                  <Route path="app-layout"  element={< AppLayout children={undefined}   title={''}/>}></Route>
                  <Route path="dashboard" element={ < Dashboard />}></Route>
                  <Route path="*" element={< NoPage />}></Route>
              </Routes>
              </Provider>
          </BrowserRouter>
      </MantineProvider>
  </StrictMode>,
)
