import TabsMenu from '@/components/tabs'
import { TabsContent } from '@/components/ui/tabs'
import { HELP_DESK_TABS_MENU } from '@/constants/menu'
import React from 'react'
import HelpDesk from './help-desk'
import FilterQuestions from './filter-questions'
import { Bot } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

type Props = {
  id: string
}

const BotTrainingForm = ({ id }: Props) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold tracking-tight">Bot Training</h2>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Set FAQ questions, create questions for capturing lead information and train your bot to act the way you want it to.
        </p>
        <Separator className="my-4" />
      </div>

      {/* Tabs Content */}
      <TabsMenu 
        triggers={HELP_DESK_TABS_MENU}
        className="w-full"
      >
        <TabsContent
          value="help desk"
          className="w-full mt-4"
        >
          <HelpDesk id={id} />
        </TabsContent>
        <TabsContent 
          value="questions"
          className="mt-4"
        >
          <FilterQuestions id={id} />
        </TabsContent>
      </TabsMenu>
    </div>
  )
}

export default BotTrainingForm
