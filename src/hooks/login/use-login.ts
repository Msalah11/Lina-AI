import { useToast } from '@/components/ui/use-toast'
import { UserLoginProps, UserLoginSchema } from '@/schemas/auth.schema'
import { useSignIn } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const useLoginForm = () => {
  const { isLoaded, setActive, signIn } = useSignIn()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const router = useRouter()
  const { toast } = useToast()

  // Initialize form methods with validation schema using Zod
  const formMethods = useForm<UserLoginProps>({
    resolver: zodResolver(UserLoginSchema),
    mode: 'onChange',
  })

  // Form submission handler
  const handleLogin = formMethods.handleSubmit(
    async (formData: UserLoginProps) => {
      if (!isLoaded) return

      try {
        setIsSubmitting(true)

        // Attempt to sign in the user
        const response = await signIn.create({
          identifier: formData.email,
          password: formData.password,
        })

        if (response.status === 'complete') {
          await setActive({ session: response.createdSessionId })
          toast({
            title: 'Success',
            description: 'Welcome back!',
          })
          router.push('/dashboard')
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setIsSubmitting(false)

        if (error.errors[0].code === 'form_password_incorrect') {
          toast({
            title: 'Error',
            description: 'Incorrect email/password. Please try again.',
          })
        }
      }
    }
  )

  return {
    formMethods,
    handleLogin,
    isSubmitting,
  }
}
