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
              <a href="/statspage" class="text-midnight visited:text-purple ...">food waste research + stats</a>
            </div>
            <div className="py-4">
              <Button onClick={redirectToLoginPage}>get started</Button>
            </div>
          </div>

        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={closed} alt="cute periwinkle fridge" className="w-3/5" />
        </div>
    </div>
  )
}

export default LandingPage