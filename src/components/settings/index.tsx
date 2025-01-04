'use client'
import { cn } from '@/lib/utils'
import { CreditCard, Lock, Moon, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const menuItems = [
  {
    title: 'General Settings',
    icon: Settings,
    href: '/settings',
  },
  {
    title: 'Billing',
    icon: CreditCard,
    href: '/settings/billing',
  },
  {
    title: 'Appearance',
    icon: Moon,
    href: '/settings/appearance',
  },
  {
    title: 'Security',
    icon: Lock,
    href: '/settings/security',
  },
]

const SettingsMenu = () => {
  const pathname = usePathname()

  return (
    <div className="h-full flex flex-col">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 px-2">
          Settings
        </h2>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default SettingsMenu
