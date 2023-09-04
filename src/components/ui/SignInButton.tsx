"use client"

import { FC, useState } from 'react'
import Button from './Button'

interface SignInButtonProps {
  
}

const SignInButton: FC<SignInButtonProps> = ({}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signInWIthGoogle = async()=>{
      setIsLoading(true)

      
    }


  return <Button onClick={signInWithGoogle} isLoading={isLoading}>
    Sign in
  </Button>
}

export default SignInButton