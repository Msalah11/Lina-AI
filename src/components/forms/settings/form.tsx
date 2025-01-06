"use client"
import { Separator } from "@/components/ui/separator"
import { useSettings } from "@/hooks/settings/use-settings"
import React from "react"
import { DomainUpdate } from "./domain-update"
import CodeSnippet from "./code-snippet"
import PremiumBadge from "@/icons/premium-badge"
import EditChatbotIcon from "./edit-chatbot-icon"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Loader } from "@/components/loader"
import { Settings, Bot, Trash2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const WelcomeMessage = dynamic(
  () => import("./greetings-message").then((props) => props.default),
  { ssr: false }
)

type Props = {
  id: string
  name: string
  plan: "STANDARD" | "PRO" | "ULTIMATE"
  chatBot: {
    id: string
    icon: string | null
    welcomeMessage: string | null
  } | null
}

const SettingsForm = ({ id, name, chatBot, plan }: Props) => {
  const {
    register,
    onUpdateSettings,
    errors,
    onDeleteDomain,
    deleting,
    loading,
  } = useSettings(id)

  return (
    <form className="space-y-8" onSubmit={onUpdateSettings}>
      {/* Domain Settings Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Settings className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold tracking-tight">Domain Settings</h2>
        </div>
        <Separator />
        <div className="grid gap-6">
          <DomainUpdate name={name} register={register} errors={errors} />
          <CodeSnippet id={id} />
        </div>
      </div>

      {/* Chatbot Settings Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold tracking-tight">Chatbot Settings</h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
            <PremiumBadge />
            <span className="text-xs font-semibold text-primary">Premium</span>
          </div>
        </div>
        <Separator />
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Settings Controls */}
          <div className="space-y-6 order-last md:order-first">
            <EditChatbotIcon
              chatBot={chatBot}
              register={register}
              errors={errors}
            />
            <WelcomeMessage
              message={chatBot?.welcomeMessage!}
              register={register}
              errors={errors}
            />
          </div>

          {/* Preview */}
          <div className="relative">
            <div className="sticky  ">
              <Image
                src="/images/mobile.png"
                className="rounded-2xl lg:rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm"
                alt="bot-ui"
                priority
                width={250}
                height={769}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
        <Alert variant="destructive" className="max-w-xl flex gap-2 items-center pt-4">
          <Trash2 className="h-4 w-4" />
          <AlertDescription>
            Deleting a domain cannot be undone. All data will be permanently removed.
          </AlertDescription>
        </Alert>

        <div className="flex gap-4">
          <Button
            onClick={onDeleteDomain}
            variant="destructive"
            type="button"
            className="gap-2"
          >
            <Trash2 className="h-4 w-4" />
            <Loader loading={deleting}>Delete Domain</Loader>
          </Button>
          
          <Button type="submit" className="min-w-[100px]">
            <Loader loading={loading}>Save Changes</Loader>
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SettingsForm
