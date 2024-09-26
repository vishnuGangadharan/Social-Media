import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './redux/store.ts'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <StrictMode>
  <NextUIProvider>
    <App />
    <ToastContainer />
  </NextUIProvider>
  </StrictMode>
  </Provider>
)
