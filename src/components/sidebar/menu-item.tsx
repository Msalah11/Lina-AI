import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

type Props = {
  size: 'max' | 'min'
  label: string
  icon: JSX.Element
  path?: string
  current?: string
  onSignOut?(): void
}

const MenuItem = ({ size, path, icon, label, current, onSignOut }: Props) => {
  const isActive = current === path
  const href = path ? `/${path}` : '#'

  const baseClasses = cn(
    'group flex items-center rounded-lg transition-all duration-200',
    'hover:bg-gray-100 dark:hover:bg-gray-800',
    isActive && 'bg-primary/10 text-primary dark:text-primary',
    !isActive && 'text-gray-600 dark:text-gray-400'
  )

  const iconWrapper = (
    <span
      className={cn(
        'flex items-center justify-center transition-transform duration-200',
        size === 'max' ? 'mr-3' : 'mx-auto',
        'group-hover:scale-110'
      )}
    >
      {icon}
    </span>
  )

  if (size === 'min') {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              onClick={onSignOut}
              className={cn(baseClasses, 'p-2 justify-center')}
              href={href}
            >
              {iconWrapper}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <Link
      onClick={onSignOut}
      className={cn(baseClasses, 'px-3 py-2')}
      href={href}
    >
      {iconWrapper}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  )
}

export default MenuItem