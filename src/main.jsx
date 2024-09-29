import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RequiredAuthProvider, RedirectToLogin } from "@propelauth/react";
//import LoginPage from './login.jsx'
import AddInventory from './pages/AddInventory.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <RequiredAuthProvider
    authUrl={import.meta.env.VITE_AUTH_URL}
    // displayWhileLoading={<Loading />}
    displayIfLoggedOut={<RedirectToLogin />}
  >
  <StrictMode>
    <main className="bg-gray-300 h-screen w-[screen] flex justify-center items-center">
      <div className='w-[80%]'>
        <App />
      </div>
    </main>
  </StrictMode>
  </RequiredAuthProvider>,
)