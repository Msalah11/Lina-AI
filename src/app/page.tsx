import Features from '@/components/landing/features'
import Hero from '@/components/landing/hero'
import NavBar from '@/components/landing/navbar'
import PriceTable from '@/components/landing/price-table'
import MultiDomain from '@/components/landing/multi-domain'
import Testimonials from '@/components/landing/testimonials'
import FAQ from '@/components/landing/faq'
import Footer from '@/components/landing/footer'
import { Button } from '@/components/ui/button'

export default async function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <MultiDomain />
      <PriceTable />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}