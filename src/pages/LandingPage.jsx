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
            <div className="text-5xl font-bold text-midnight">
              <p>refrigerATE</p>
            </div>
            <div className="py-8 text-base font-normal">
              <p>a fridge inventory tracker to keep your food out of landfills and your meals as fresh as possible.</p>
            </div>
            <div className="italic underline text-base font-normal">
              <a href="/statspage" className="text-midnight visited:text-dark-purple ...">food waste research + stats</a>
            </div>
            <div className="py-4">
              <Button onClick={redirectToLoginPage}>get started (or click on the fridge!)</Button>
            </div>
          </div>

        </div>
        <div className="w-1/3 justify-center items-center">
          <a href="https://79676842581.propelauthtest.com/en/login" onClick={redirectToLoginPage} target="_blank">
            <img src={closed} title="open fridge!" alt="cute periwinkle fridge" />
          </a>
        </div>
    </div>
  )
}

export default LandingPage