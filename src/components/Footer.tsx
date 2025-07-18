import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Shield,
  Award,
  Globe,
  TrendingUp
} from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Exchange Rates', href: '#rates' },
    { name: 'Branch Locator', href: '#branches' },
    { name: 'Contact', href: '#contact-support' },
    { name: 'Admin Login', href: '#admin' }
  ]

  const services = [
    { name: 'Outward Remittance', href: '#outward-remittance' },
    { name: 'Travel Forex Cards', href: '#travel-forex-card' },
    { name: 'Currency Exchange', href: '#buy-forex-currency' },
    { name: 'Education Remittance', href: '#education' },
    { name: 'Medical Remittance', href: '#medical' },
    { name: 'Business Payments', href: '#business' }
  ]

  const support = [
    { name: '24/7 Customer Support', href: '#support' },
    { name: 'WhatsApp Support', href: '#whatsapp' },
    { name: 'Live Chat', href: '#chat' },
    { name: 'Email Support', href: '#email' },
    { name: 'Branch Visit', href: '#branch' },
    { name: 'FAQ', href: '#faq' }
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Exchange Rates</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest exchange rates, forex news, and special offers directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Quick<span className="text-accent">Forex</span>
              </h2>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Your trusted partner for global forex and remittance services. 
                RBI authorized dealer serving customers worldwide with competitive 
                rates since 2009.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold">24/7 Support</p>
                  <p className="text-sm text-primary-foreground/80">+91-11-4567-8900</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold">Email Support</p>
                  <p className="text-sm text-primary-foreground/80">info@quickforex.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold">Head Office</p>
                  <p className="text-sm text-primary-foreground/80">Connaught Place, New Delhi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Support</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold">RBI Authorized</h4>
              <p className="text-sm text-primary-foreground/80">Dealer License</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold">100+</h4>
              <p className="text-sm text-primary-foreground/80">Countries Served</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold">50,000+</h4>
              <p className="text-sm text-primary-foreground/80">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold">₹500Cr+</h4>
              <p className="text-sm text-primary-foreground/80">Transactions Processed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-foreground/80">
              <p>&copy; 2024 Quick Forex Limited. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
                <a href="#compliance" className="hover:text-accent transition-colors">FEMA Compliance</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/80">Follow us:</span>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary-foreground/10">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary-foreground/10">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary-foreground/10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary-foreground/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}