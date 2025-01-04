'use client'
import useSideBar from '@/context/use-sidebar'
import { cn } from '@/lib/utils'
import React from 'react'
import MaxMenu from './maximized-menu'
import { MinMenu } from './minimized-menu'

type Props = {
  domains:
    | {
        id: string
        name: string
        icon: string
      }[]
    | null
    | undefined
}

const SideBar = ({ domains }: Props) => {
  const { expand, onExpand, page, onSignOut } = useSideBar()

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen transition-all duration-300',
        'border-r border-gray-200 dark:border-gray-800',
        'bg-white dark:bg-gray-950',
        'shadow-sm',
        expand ? 'w-64' : 'w-16',
        'md:relative'
      )}
    >
      {/* Glass Effect Overlay */}
      <div
        className={cn(
          'absolute inset-0 z-0',
          'bg-gradient-to-b from-white/30 to-white/10 dark:from-gray-950/30 dark:to-gray-950/10',
          'backdrop-blur-[2px]'
        )}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {expand ? (
          <MaxMenu
            domains={domains}
            current={page!}
            onExpand={onExpand}
            onSignOut={onSignOut}
          />
        ) : (
          <MinMenu
            domains={domains}
            onShrink={onExpand}
            current={page!}
            onSignOut={onSignOut}
          />
        )}
      </div>

      {/* Bottom Gradient */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-24 z-20',
          'bg-gradient-to-t from-white to-transparent dark:from-gray-950'
        )}
      />
    </aside>
  )
}

export default SideBar