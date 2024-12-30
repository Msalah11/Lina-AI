"use client"
import React, { useState } from 'react'

type AuthContextValues = {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const defaultAuthContextValues: AuthContextValues = {
  currentStep: 1,
  setCurrentStep: () => undefined,
}

// Create context for managing authentication step state
const AuthContext = React.createContext(defaultAuthContextValues)

const { Provider } = AuthContext

// Provider component that supplies the authentication context to the component tree
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [currentStep, setCurrentStep] = useState<number>(defaultAuthContextValues.currentStep)

  const contextValues = {
    currentStep,
    setCurrentStep,
  }

  return <Provider value={contextValues}>{children}</Provider>
}

// Custom hook for accessing authentication context
export const useAuthContext = () => {
  const context = React.useContext(AuthContext)
  return context
}
