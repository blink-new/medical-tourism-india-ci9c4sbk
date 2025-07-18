import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone, Mail, MapPin, User } from 'lucide-react'

interface HeaderProps {
  currentPage: string
}

export function Header({ currentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Outward Remittance', href: '#outward-remittance', id: 'outward-remittance' },
    { name: 'Travel Forex Card', href: '#travel-forex-card', id: 'travel-forex-card' },
    { name: 'Buy Forex Currency', href: '#buy-forex-currency', id: 'buy-forex-currency' },
    { name: 'Contact & Support', href: '#contact-support', id: 'contact-support' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-11-4567-8900</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@quickforex.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Delhi NCR, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">
                Quick<span className="text-accent">Forex</span>
              </h1>
              <p className="text-xs text-muted-foreground">Global Forex & Remittance</p>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Admin Login
            </Button>
            <Button size="sm" className="forex-gradient">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        currentPage === item.id
                          ? 'text-primary bg-primary/10 rounded-md'
                          : 'text-foreground hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex flex-col space-y-2 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      <User className="h-4 w-4 mr-2" />
                      Admin Login
                    </Button>
                    <Button size="sm" className="forex-gradient">
                      Get Quote
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}