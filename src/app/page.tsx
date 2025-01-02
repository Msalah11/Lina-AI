import Features from '@/components/landing/features'
import Hero from '@/components/landing/hero'
import NavBar from '@/components/landing/navbar'
import PriceTable from '@/components/landing/price-table'
import { Button } from '@/components/ui/button'


export default async function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <PriceTable />
    </main>
  )
}