import LoginFormProvider from '@/components/forms/login/form-provider'
import LoginForm from '@/components/forms/login/login-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <LoginFormProvider>
          <div className="flex flex-col gap-3">
            <LoginForm />
            <div className="w-full flex flex-col gap-3 items-center">
              <Button
                type="submit"
                className="w-full"
              >
                Submit
              </Button>
              <p>
                Don’t have an account?{' '}
                <Link
                  href="/auth/register"
                  className="font-bold"
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </LoginFormProvider>
      </div>
    </div>
  )
}

export default SignInPage