import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  Shield, 
  Award, 
  Users, 
  Clock, 
  DollarSign,
  ArrowRight,
  Play
} from 'lucide-react'

export function HeroSection() {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Patients Treated' },
    { icon: Award, value: '200+', label: 'Top Hospitals' },
    { icon: Heart, value: '95%', label: 'Success Rate' },
    { icon: DollarSign, value: '70%', label: 'Cost Savings' },
  ]

  const features = [
    'World-class medical facilities',
    'English-speaking doctors',
    'Affordable treatment costs',
    'Complete travel assistance'
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 medical-gradient hero-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary border-primary/20">
                <Shield className="w-4 h-4 mr-2" />
                Trusted Medical Tourism Partner
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                World-Class 
                <span className="text-primary block">Healthcare</span>
                <span className="text-accent">in India</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Access premium medical treatments at India's top hospitals in Delhi NCR. 
                Save up to 70% on costs while receiving world-class care from internationally 
                trained doctors.
              </p>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="medical-gradient text-lg px-8 py-6">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
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
                <span className="text-sm text-muted-foreground">Trusted by 50,000+ patients</span>
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
                    <h3 className="font-semibold text-lg">24/7 Emergency Support</h3>
                    <p className="text-muted-foreground">Immediate assistance for urgent medical needs</p>
                    <Button variant="link" className="p-0 h-auto text-accent font-semibold">
                      Call Now: +91-11-4567-8900
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}