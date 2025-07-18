import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { OutwardRemittancePage } from './pages/OutwardRemittancePage'
import { TravelForexCardPage } from './pages/TravelForexCardPage'
import { BuyForexCurrencyPage } from './pages/BuyForexCurrencyPage'
import { ContactSupportPage } from './pages/ContactSupportPage'
import { AdminDashboard } from './pages/AdminDashboard'
import { Footer } from './components/Footer'
import { Toaster } from './components/ui/toaster'
import blink from './blink/client'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  // Simple routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setCurrentPage(hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Set initial page

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading Quick Forex...</p>
        </div>
      </div>
    )
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'outward-remittance':
        return <OutwardRemittancePage />
      case 'travel-forex-card':
        return <TravelForexCardPage />
      case 'buy-forex-currency':
        return <BuyForexCurrencyPage />
      case 'contact-support':
        return <ContactSupportPage />
      case 'admin':
        return <AdminDashboard user={user} />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App