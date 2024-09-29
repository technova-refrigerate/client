import React from 'react'
import { useRedirectFunctions } from '@propelauth/react';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()
  return (
    <Button onClick={redirectToLoginPage}>open</Button>
  )
}

export default LandingPage