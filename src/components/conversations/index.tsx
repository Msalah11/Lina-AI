'use client'
import { useConversation } from '@/hooks/conversation/use-conversation'
import React from 'react'
import ConversationSearch from './search'
import { Loader } from '../loader'
import ChatCard from './chat-card'
import { MessageCircle } from 'lucide-react'

type Props = {
  domains?:
    | {
        name: string
        id: string
        icon: string
      }[]
    | undefined
}

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center h-full p-4 text-center">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <MessageCircle className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
      No conversations yet
    </h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-[240px]">
      Start chatting with your customers to see conversations here
    </p>
  </div>
)

const ConversationMenu = ({ domains }: Props) => {
  const { register, chatRooms, loading, onGetActiveChatMessages, activeChatId } =
    useConversation()

  return (
    <div className="h-full flex flex-col">
      {/* Search and Domain Selection */}
      <div className="p-3 lg:p-4">
        <ConversationSearch
          domains={domains}
          register={register}
        />
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-hidden">
        <Loader loading={loading}>
          <div className="h-full p-2 overflow-y-auto">
            {chatRooms.length > 0 ? (
              <div className="space-y-2">
                {chatRooms.map((room) => (
                  <ChatCard
                    key={room.chatRoom[0].id}
                    seen={room.chatRoom[0].message[0]?.seen}
                    id={room.chatRoom[0].id}
                    active={activeChatId === room.chatRoom[0].id}
                    onChat={() => onGetActiveChatMessages(room.chatRoom[0].id)}
                    createdAt={room.chatRoom[0].message[0]?.createdAt}
                    title={room.email!}
                    description={room.chatRoom[0].message[0]?.message}
                  />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}
          </div>
        </Loader>
      </div>
    </div>
  )
}

export default ConversationMenu
