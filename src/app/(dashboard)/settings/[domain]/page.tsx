import { onGetCurrentDomainInfo } from '@/actions/settings'
import BotTrainingForm from '@/components/forms/settings/bot-training'
import SettingsForm from '@/components/forms/settings/form'
import InfoBar from '@/components/infobar'
import ProductTable from '@/components/products'
import { redirect } from 'next/navigation'
import React from 'react'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

type Props = { params: { domain: string } }

const DomainSettingsPage = async ({ params }: Props) => {
  const domain = await onGetCurrentDomainInfo(params.domain)
  if (!domain) redirect('/dashboard')

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900">
       {/* Top Bar */}
       <div className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 lg:px-6 py-3">
          <InfoBar />
        </div>
      </div>
      
      <ScrollArea className="flex-1 px-6">
        <div className="max-w-6xl mx-auto py-8 space-y-8">
          {/* Settings Form Section */}
          <Card className="p-6 shadow-sm">
            <SettingsForm
              plan={domain.subscription?.plan!}
              chatBot={domain.domains[0].chatBot}
              id={domain.domains[0].id}
              name={domain.domains[0].name}
            />
          </Card>

          {/* Bot Training Section */}
          <Card className="p-6 shadow-sm">
            <BotTrainingForm id={domain.domains[0].id} />
          </Card>

          {/* Products Section */}
          <Card className="p-6 shadow-sm">
            <ProductTable
              id={domain.domains[0].id}
              products={domain.domains[0].products || []}
            />
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}

export default DomainSettingsPage
