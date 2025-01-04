import { SIDE_BAR_MENU } from '@/constants/menu'
import { LogOut, Menu, MonitorSmartphone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import DomainMenu from './domain-menu'
import MenuItem from './menu-item'
import { cn } from '@/lib/utils'

type Props = {
  onExpand(): void
  current: string
  onSignOut(): void
  domains:
    | {
        id: string
        name: string
        icon: string | null
      }[]
    | null
    | undefined
}

const MaxMenu = ({ current, domains, onExpand, onSignOut }: Props) => {
  return (
    <div className="py-3 px-4 flex flex-col h-full bg-cream dark:bg-neutral-950">
      <div className="flex justify-between items-center">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          className="animate-fade-in opacity-0 delay-300 fill-mode-forwards"
          style={{
            width: '50%',
            height: 'auto',
          }}
          width={0}
          height={0}
        />
        <Menu
          className="cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards hover:text-primary transition-colors"
          onClick={onExpand}
        />
      </div>

      <div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-10">
        {/* Main Menu */}
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">MENU</p>
          <div className="space-y-1">
            {SIDE_BAR_MENU.map((menu, key) => (
              <MenuItem
                size="max"
                {...menu}
                key={key}
                current={current}
              />
            ))}
          </div>

          {/* Domains Section */}
          <DomainMenu domains={domains} />
        </div>

        {/* Options */}
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">OPTIONS</p>
          <div className="space-y-1">
            <MenuItem
              size="max"
              label="Sign out"
              icon={<LogOut className="h-5 w-5" />}
              onSignOut={onSignOut}
            />
            <MenuItem
              size="max"
              label="Mobile App"
              icon={<MonitorSmartphone className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaxMenu