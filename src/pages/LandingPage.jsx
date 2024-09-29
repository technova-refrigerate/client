import React from 'react'
import { useRedirectFunctions } from '@propelauth/react';
import { Button } from '@/components/ui/button';
import closed from '../assets/closed.png'

const LandingPage = () => {
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()
  return (
    <div className="flex h-full w-full">
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-4/5 text-5xl font-bold text-midnight">
          <h1>Best BeFridged</h1>
            <div className="py-8 w-4/5 text-base font-normal">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate lectus at tincidunt vulputate. Vivamus non mattis mauris. Nam ante sem, tincidunt eu sodales nec, vestibulum et est. Praesent aliquet at neque non tempus. Morbi sed ipsum venenatis, commodo turpis laoreet, semper mi. </p>
            </div>
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