import React from 'react'
import { useRedirectFunctions } from '@propelauth/react';
import { Button } from '@/components/ui/button';
import closed from '../assets/closed.png'

const LandingPage = () => {
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()
  return (
    <div className="flex h-full w-full">
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-4/5">
          <h1>Best BeFridged</h1>
          <Button onClick={redirectToLoginPage}>open</Button>
          </div>

        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={closed} alt="cute periwinkle fridge" className="w-3/5" />
        </div>
    </div>
  )
}

export default LandingPage