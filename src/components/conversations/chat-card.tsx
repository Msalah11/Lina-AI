'use client'
import { useChatTime } from '@/hooks/conversation/use-conversation'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { MessageSquare, User } from 'lucide-react'
import { UrgentIcon } from '@/icons/urgent-icon'
import { cn } from '@/lib/utils'

type Props = {
  title: string
  description?: string
  createdAt: Date
  id: string
  onChat(): void
  seen?: boolean
  active?: boolean
}

const ChatCard = ({
  title,
  description,
  createdAt,
  onChat,
  id,
  seen,
  active,
}: Props) => {
  const { messageSentAt, urgent } = useChatTime(createdAt, id)

  return (
    <Card
      onClick={onChat}
      className={cn(
        "rounded-lg border-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-all duration-200 mx-2 my-1",
        active && "bg-primary/5 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20",
        !seen && "border-l-4 border-l-primary"
      )}
    >
      <CardContent className="p-4 flex items-start gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={`https://avatar.vercel.sh/${title}.png`} />
          <AvatarFallback className="bg-primary/10">
            <User className="h-5 w-5 text-primary" />
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm text-gray-900 dark:text-gray-100 truncate">
                {title}
              </span>
              {urgent && !seen && (
                <span className="flex items-center">
                  <UrgentIcon className="h-4 w-4 text-red-500" />
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
              {createdAt ? messageSentAt : ''}
            </span>
          </div>
          
          <div className="mt-1 flex items-center gap-2">
            <MessageSquare className="h-3 w-3 text-gray-400" />
            <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
              {description
                ? description.length > 50
                  ? description.substring(0, 50) + '...'
                  : description
                : 'Start a new conversation'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ChatCard
