import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRightLeft, 
  CreditCard, 
  Banknote, 
  Shield, 
  Clock, 
  Globe,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Phone
} from 'lucide-react'

export function HomePage() {
  const services = [
    {
      icon: ArrowRightLeft,
      title: 'Outward Remittance',
      description: 'Send money abroad for education, medical treatment, business, or family support with competitive rates.',
      features: ['Education fees', 'Medical expenses', 'Business payments', 'Family support'],
      href: '#outward-remittance'
    },
    {
      icon: CreditCard,
      title: 'Travel Forex Card',
      description: 'Multi-currency prepaid cards for safe and convenient international travel.',
      features: ['Multi-currency support', 'Chip & PIN security', 'Online management', 'Emergency assistance'],
      href: '#travel-forex-card'
    },
    {
      icon: Banknote,
      title: 'Buy Forex Currency',
      description: 'Purchase foreign currency at competitive rates with doorstep delivery available.',
      features: ['Live exchange rates', 'Doorstep delivery', 'Multiple currencies', 'Instant booking'],
      href: '#buy-forex-currency'
    }
  ]

  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Customers' },
    { icon: Globe, value: '100+', label: 'Countries Served' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '₹500Cr+', label: 'Transactions Processed' },
  ]

  const features = [
    'RBI Authorized Dealer',
    'Competitive exchange rates',
    'Quick processing',
    'Doorstep delivery available'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 forex-gradient hero-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-primary border-primary/20">
                  <Shield className="w-4 h-4 mr-2" />
                  RBI Authorized Dealer
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Global Forex &
                  <span className="text-primary block">Remittance</span>
                  <span className="text-accent">Services</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Your trusted partner for outward remittance, travel forex cards, and currency exchange. 
                  Serving customers globally with competitive rates and reliable service.
                </p>
              </div>

              {/* Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="forex-gradient text-lg px-8 py-6">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91-11-4567-8900
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background"></div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Trusted by 50,000+ customers</span>
                </div>
              </div>
            </div>

            {/* Right content - Stats cards */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency contact card */}
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">24/7 Customer Support</h3>
                      <p className="text-muted-foreground">Get assistance anytime for your forex needs</p>
                      <Button variant="link" className="p-0 h-auto text-accent font-semibold">
                        WhatsApp: +91-98765-43210
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive forex and remittance solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    variant="outline"
                    onClick={() => window.location.hash = service.href.slice(1)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Currency Rates Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Currency Rates</h2>
            <p className="text-xl text-muted-foreground">
              Get the best exchange rates updated in real-time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { currency: 'USD', rate: '83.25', change: '+0.15' },
              { currency: 'EUR', rate: '90.45', change: '-0.25' },
              { currency: 'GBP', rate: '105.80', change: '+0.35' },
              { currency: 'AUD', rate: '55.60', change: '+0.10' },
            ].map((item, index) => (
              <Card key={index} className="currency-card text-center p-6">
                <div className="text-2xl font-bold text-primary mb-2">{item.currency}</div>
                <div className="text-3xl font-bold mb-2">₹{item.rate}</div>
                <div className={`text-sm font-medium ${
                  item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.change}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="forex-gradient">
              View All Rates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}