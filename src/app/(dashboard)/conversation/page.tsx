import { onGetAllAccountDomains } from '@/actions/settings'
import ConversationMenu from '@/components/conversations'
import Messenger from '@/components/conversations/messenger'
import InfoBar from '@/components/infobar'
import React from 'react'

const ConversationPage = async () => {
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
      <div className="flex-1 flex flex-col lg:flex-row min-h-0">
        {/* Sidebar - Full height on mobile, side column on desktop */}
        <div className="w-full lg:w-[320px] lg:flex-shrink-0 bg-white dark:bg-gray-800 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
          <ConversationMenu domains={domains?.domains} />
        </div>

        {/* Chat Area */}
        <div className="flex-1 min-w-0">
          <Messenger />
        </div>
      </div>
    </div>
  )
}

export default ConversationPage
