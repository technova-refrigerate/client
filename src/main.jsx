import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider, RedirectToLogin } from "@propelauth/react";
// import LoginPage from './login.jsx'
//import LandingPage from './pages/LandingPage.jsx'
import './index.css'
import App from './App.jsx'
import { Toaster } from "@/components/ui/toaster"

createRoot(document.getElementById('root')).render(
  <AuthProvider
    authUrl={import.meta.env.VITE_AUTH_URL}
    // displayWhileLoading={<Loading />}
    // displayIfLoggedOut={<RedirectToLogin />}
  >
  <StrictMode>
    <main className="bg-cream h-screen w-[screen] flex justify-center items-center">
      <div className='w-[80%]'>
        <App />
        <Toaster />
      </div>
    </main>
  </StrictMode>
  </AuthProvider>,
)