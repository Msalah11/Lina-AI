import { onGetSubscriptionPlan } from '@/actions/settings'
import React from 'react'
import Section from '../section-label'
import { Card, CardContent, CardDescription } from '../ui/card'
import { CheckCircle2, Plus } from 'lucide-react'
import { pricingCards } from '@/constants/landing'
import Modal from '../modal'
import SubscriptionForm from '../forms/settings/subscription-form'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CreditCard } from 'lucide-react'

type Props = {}

const BillingSettings = async (props: Props) => {
  const plan = await onGetSubscriptionPlan()
  const planFeatures = pricingCards.find(
    (card) => card.title.toUpperCase() === plan?.toUpperCase()
  )?.features
  if (!planFeatures) return

  console.log(planFeatures)
  return (
    <div className="space-y-6 mb-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Billing & Subscription
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage your billing information and subscription plan
          </p>
        </div>
        <Button variant="outline" size="sm">
          <CreditCard className="h-4 w-4 mr-2" />
          Manage Billing
        </Button>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Current Plan</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{plan}</p>
            </div>
            <Modal
              title="Choose A Plan"
              description="Tell us about yourself! What do you do? Let’s tailor your experience so it best suits you."
              trigger={
                plan && plan === 'STANDARD' ? (
                  <Button variant="secondary" size="sm">Upgrade Plan</Button>
                ) : (
                  <Button variant="secondary" size="sm">Change Plan</Button>
                )
              }
            >
              <SubscriptionForm plan={plan!} />
            </Modal>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Plan Features</h4>
              <div className="flex gap-2 flex-col mt-2">
                {planFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-2"
                  >
                    <CheckCircle2 className="text-muted-foreground" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="ghost" size="sm">Update</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default BillingSettings
