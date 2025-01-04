import React from 'react'
import { onGetAllAccountDomains } from '@/actions/settings'
import InfoBar from '@/components/infobar'
import SettingsMenu from '@/components/settings'
import BillingSettings from '@/components/settings/billing-settings'
import ChangePassword from '@/components/settings/change-password'
import DarkModetoggle from '@/components/settings/dark-mode'

const SettingsPage = async () => {
  const domains = await onGetAllAccountDomains()

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900">
      {/* Top Bar */}
      <div className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 lg:px-6 py-3">
          <InfoBar />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 overflow-auto">
          <div className="max-w-4xl mx-auto p-4 lg:p-8">
          <div className="p-6">
                <BillingSettings />
                <DarkModetoggle />
                <ChangePassword />
              </div>
          </div>
        </div>
    </div>
  )
}

export default SettingsPage
