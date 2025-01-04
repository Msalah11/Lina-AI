'use client'
import { useChangePassword } from '@/hooks/settings/use-settings'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Lock } from 'lucide-react'
import { Loader } from '../loader'

type Props = {}

const ChangePassword = (props: Props) => {
  const { register, errors, onChangePassword, loading } = useChangePassword()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Security
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Update your password and security settings
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Lock className="h-4 w-4 mr-2" />
          Security Log
        </Button>
      </div>

      <Card className="p-6">
        <form onSubmit={onChangePassword} className="space-y-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Current Password
              </label>
              <Input
                id="current-password"
                type="password"
                placeholder="Enter current password"
                {...register('password')}
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                New Password
              </label>
              <Input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                {...register('newPassword')}
              />
              {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Confirm New Password
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit">
              <Loader loading={loading}>Update Password</Loader>
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default ChangePassword
