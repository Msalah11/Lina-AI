'use client'

import { Card } from '@/components/ui/card'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="space-y-6 mb-10">
      <div className="space-y-1">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Appearance
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Customize your interface theme
        </p>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center">
          <div className="space-y-0.5">
            <h4 className="font-medium text-gray-900 dark:text-gray-100">Theme</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose between light and dark theme
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setTheme('light')}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'light'
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              aria-label="Light Mode"
            >
              <Sun className="h-5 w-5" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              aria-label="Dark Mode"
            >
              <Moon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default DarkModeToggle
