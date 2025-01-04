'use client'
import { useChatWindow } from '@/hooks/conversation/use-conversation'
import React from 'react'
import { Loader } from '../loader'
import Bubble from '../chatbot/bubble'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ImagePlus, MessageSquare, PaperclipIcon, Send, Smile } from 'lucide-react'

const Messenger = () => {
  const {
    messageWindowRef,
    chats,
    loading,
    chatRoom,
    onHandleSentMessage,
    register,
  } = useChatWindow()

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-indigo-50/30 via-white to-primary/5 dark:from-gray-800/50 dark:via-gray-900 dark:to-primary/10">
      {/* Messages Area */}
      <div className="flex-1 overflow-hidden relative">
        <Loader loading={loading}>
          {chats.length > 0 ? (
            <div
              ref={messageWindowRef}
              className="h-full px-3 md:px-6 lg:px-8 py-4 space-y-4 md:space-y-6 overflow-y-auto"
            >
              {chats.map((chat) => (
                <Bubble
                  key={chat.id}
                  message={{
                    role: chat.role!,
                    content: chat.message,
                  }}
                  createdAt={chat.createdAt}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full px-4">
              <div className="text-center space-y-4 max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Start a Conversation
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Select a chat from the sidebar or start a new conversation to begin interacting with your customers
                </p>
              </div>
            </div>
          )}
        </Loader>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 md:p-4">
        <form
          onSubmit={onHandleSentMessage}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex-1 relative">
              <Input
                {...register('content')}
                placeholder="Type your message..."
                className="pr-24 py-5 md:py-6 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-xl focus-visible:ring-primary/20 focus-visible:ring-offset-2"
              />
              <div className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 md:gap-1.5">
                <button 
                  type="button" 
                  className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <Smile className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button 
                  type="button" 
                  className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <ImagePlus className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button 
                  type="button" 
                  className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <PaperclipIcon className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </div>
            <Button
              type="submit"
              disabled={!chatRoom}
              className="h-10 md:h-12 px-4 md:px-6 rounded-xl bg-primary hover:bg-primary/90 transition-colors"
            >
              <Send className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Messenger
