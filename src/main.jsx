import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RequiredAuthProvider, RedirectToLogin } from "@propelauth/react";
import LoginPage from './login.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <RequiredAuthProvider
    authUrl={import.meta.env.VITE_AUTH_URL}
    // displayWhileLoading={<Loading />}
    displayIfLoggedOut={<RedirectToLogin />}
  >
    <StrictMode>
      <LoginPage />
    </StrictMode>
  </RequiredAuthProvider>,
)
