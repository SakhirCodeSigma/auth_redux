import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
// import ProtectedRoute from './Components/PrivateRoute.tsx'

import { Provider } from 'react-redux'
import store from './redux/store.tsx'
import ProtectedRoute from "./Components/PrivateRoute.tsx";
import NoPage from "./pages/NoPage.tsx";
import Test from "./pages/Test.tsx";
import App from "./App.tsx";

const theme = createTheme({


});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider theme={theme}>
          <BrowserRouter>
              <Provider store={store}>
                    <Routes>
                        <Route path='/' element={<App/>}/>
                        <Route path='/test' element={<Test/>}/>
                        <Route element={<ProtectedRoute/>}>
                            <Route path='/dashboard' element={<Dashboard/>} />
                        </Route>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='*' element={<NoPage/>}/>

                    </Routes>
              </Provider>
          </BrowserRouter>
      </MantineProvider>
  </StrictMode>,
)
