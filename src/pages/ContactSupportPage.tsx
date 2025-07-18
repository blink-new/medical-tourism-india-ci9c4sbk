import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Send,
  Headphones,
  MessageSquare,
  Globe,
  CheckCircle
} from 'lucide-react'

export function ContactSupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  })

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: '24/7 customer support',
      contact: '+91-11-4567-8900',
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick responses via WhatsApp',
      contact: '+91-98765-43210',
      action: 'Chat Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed support via email',
      contact: 'support@quickforex.com',
      action: 'Send Email'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant chat support',
      contact: 'Available 9 AM - 9 PM',
      action: 'Start Chat'
    }
  ]

  const branches = [
    {
      name: 'Connaught Place Branch',
      address: 'Shop No. 15, Block A, Connaught Place, New Delhi - 110001',
      phone: '+91-11-4567-8901',
      hours: 'Mon-Sat: 9:30 AM - 6:30 PM',
      services: ['Currency Exchange', 'Forex Cards', 'Remittance']
    },
    {
      name: 'Karol Bagh Branch',
      address: '123, Ajmal Khan Road, Karol Bagh, New Delhi - 110005',
      phone: '+91-11-4567-8902',
      hours: 'Mon-Sat: 9:30 AM - 6:30 PM',
      services: ['Currency Exchange', 'Forex Cards', 'Remittance']
    },
    {
      name: 'Gurgaon Branch',
      address: 'Unit 45, DLF Phase 1, Gurgaon, Haryana - 122002',
      phone: '+91-124-4567-8903',
      hours: 'Mon-Sat: 9:30 AM - 6:30 PM',
      services: ['Currency Exchange', 'Forex Cards', 'Remittance']
    },
    {
      name: 'Noida Branch',
      address: 'B-12, Sector 18, Noida, Uttar Pradesh - 201301',
      phone: '+91-120-4567-8904',
      hours: 'Mon-Sat: 9:30 AM - 6:30 PM',
      services: ['Currency Exchange', 'Forex Cards', 'Remittance']
    }
  ]

  const faqData = [
    {
      question: 'What documents are required for outward remittance?',
      answer: 'You need PAN card, Aadhaar card, passport, visa (if applicable), purpose-specific documents (invoice/admission letter), bank statements, and income proof.'
    },
    {
      question: 'How long does it take to process a remittance?',
      answer: 'Typically 1-3 working days after document verification and compliance checks.'
    },
    {
      question: 'Can I reload my forex card?',
      answer: 'Yes, you can reload your forex card anytime through net banking, mobile app, or by visiting our branch.'
    },
    {
      question: 'What are the daily limits for forex cards?',
      answer: 'ATM withdrawal: $1,000 per day, POS transactions: $5,000 per day.'
    },
    {
      question: 'Do you provide doorstep delivery?',
      answer: 'Yes, we provide doorstep delivery for currency and forex cards within Delhi NCR for a nominal fee.'
    },
    {
      question: 'Are your exchange rates competitive?',
      answer: 'Yes, we offer competitive rates that are updated in real-time based on market conditions.'
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="text-primary border-primary/20 mb-4">
            <Headphones className="w-4 h-4 mr-2" />
            Contact & Support
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help with all your forex and remittance needs. Reach out to us anytime.
          </p>
        </div>

        <Tabs defaultValue="contact" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="branches">Branches</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          {/* Contact Us Tab */}
          <TabsContent value="contact" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Methods */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold mb-6">How can we help you?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <method.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                        <p className="font-medium mb-4">{method.contact}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          {method.action}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="remittance">Outward Remittance</SelectItem>
                              <SelectItem value="forex-card">Forex Card</SelectItem>
                              <SelectItem value="currency">Currency Exchange</SelectItem>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="complaint">Complaint</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="Brief subject of your inquiry"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Please describe your inquiry in detail..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full forex-gradient" size="lg">
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">9:30 AM - 6:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">9:30 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold text-red-600">Closed</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span>Emergency Support:</span>
                        <span className="font-semibold text-primary">24/7</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <MessageCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">WhatsApp Support</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Get instant support via WhatsApp for quick queries and updates.
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          Chat on WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Branches Tab */}
          <TabsContent value="branches">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Our Branch Network</h2>
                <p className="text-muted-foreground">Visit our branches for personalized service</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {branches.map((branch, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                        {branch.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">{branch.address}</p>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{branch.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm">{branch.hours}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Services Available:</h4>
                        <div className="flex flex-wrap gap-2">
                          {branch.services.map((service, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Get Directions
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Call Branch
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Find quick answers to common questions</p>
              </div>
              
              <div className="grid md:grid-cols-1 gap-4 max-w-4xl mx-auto">
                {faqData.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground ml-7">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Support Center</h2>
                <p className="text-muted-foreground">Multiple ways to get help when you need it</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Emergency Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      24/7 emergency support for urgent forex needs
                    </p>
                    <Button className="w-full forex-gradient">
                      Call Emergency Line
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Online Portal</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Manage your transactions and track status online
                    </p>
                    <Button variant="outline" className="w-full">
                      Access Portal
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Live Chat</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Instant chat support during business hours
                    </p>
                    <Button variant="outline" className="w-full">
                      Start Live Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our customer support team is available 24/7 for emergency forex services and urgent queries.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="forex-gradient">
                      <Phone className="mr-2 h-5 w-5" />
                      Call: +91-11-4567-8900
                    </Button>
                    <Button size="lg" variant="outline">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp: +91-98765-43210
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}