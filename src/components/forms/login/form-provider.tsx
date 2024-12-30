'use client'
import { Loader } from '@/components/loader'
import { AuthContextProvider } from '@/context/use-auth-context'
import { useLoginForm } from '@/hooks/login/use-login'
import React from 'react'
import { FormProvider } from 'react-hook-form'

type Props = {
  children: React.ReactNode
}

const LoginFormProvider = ({ children }: Props) => {
  const { formMethods, handleLogin, isSubmitting } = useLoginForm()

  return (
    <AuthContextProvider>
      <FormProvider {...formMethods}>
        <form
          onSubmit={handleLogin}
          className="h-full"
        >
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={isSubmitting}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  )
}

export default LoginFormProvider;