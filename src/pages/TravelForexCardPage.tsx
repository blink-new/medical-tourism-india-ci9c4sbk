import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  CreditCard, 
  Shield, 
  Globe, 
  Smartphone,
  CheckCircle,
  AlertCircle,
  Upload,
  Plane,
  Lock,
  RefreshCw,
  Phone
} from 'lucide-react'

export function TravelForexCardPage() {
  const [formData, setFormData] = useState({
    cardType: '',
    currencies: [] as string[],
    applicantName: '',
    applicantEmail: '',
    applicantPhone: '',
    travelDate: '',
    destination: '',
    loadAmount: ''
  })

  const cardTypes = [
    {
      id: 'multi-currency',
      title: 'Multi-Currency Card',
      description: 'Load up to 16 currencies on a single card',
      features: ['16 currencies', 'Chip & PIN', 'Online management', 'Emergency assistance'],
      price: '₹500'
    },
    {
      id: 'single-currency',
      title: 'Single Currency Card',
      description: 'Dedicated card for one specific currency',
      features: ['Single currency', 'Lower fees', 'Easy to manage', 'Quick reload'],
      price: '₹300'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Chip & PIN technology with fraud protection'
    },
    {
      icon: Globe,
      title: 'Global Acceptance',
      description: 'Accepted at millions of locations worldwide'
    },
    {
      icon: Smartphone,
      title: 'Online Management',
      description: 'Manage your card through mobile app & web portal'
    },
    {
      icon: Lock,
      title: 'Lock/Unlock',
      description: 'Instantly lock/unlock your card for security'
    },
    {
      icon: RefreshCw,
      title: 'Easy Reload',
      description: 'Reload your card anytime from anywhere'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer support'
    }
  ]

  const currencies = [
    'USD - US Dollar',
    'EUR - Euro',
    'GBP - British Pound',
    'CAD - Canadian Dollar',
    'AUD - Australian Dollar',
    'SGD - Singapore Dollar',
    'JPY - Japanese Yen',
    'CHF - Swiss Franc'
  ]

  const documents = [
    'PAN Card (mandatory)',
    'Aadhaar Card',
    'Passport (mandatory)',
    'Visa (if available)',
    'Passport size photographs (2)',
    'Travel itinerary/ticket',
    'Bank statements (last 3 months)',
    'Form A2 (will be provided)'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCurrencyToggle = (currency: string) => {
    setFormData(prev => ({
      ...prev,
      currencies: prev.currencies.includes(currency)
        ? prev.currencies.filter(c => c !== currency)
        : [...prev.currencies, currency]
    }))
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="text-primary border-primary/20 mb-4">
            <CreditCard className="w-4 h-4 mr-2" />
            Travel Forex Cards
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Smart with Forex Cards</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Multi-currency prepaid cards for safe, convenient, and cost-effective international travel
          </p>
        </div>

        <Tabs defaultValue="apply" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="apply">Apply Now</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>

          {/* Apply Now Tab */}
          <TabsContent value="apply" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Card Type Selection */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold mb-6">Choose Your Card Type</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {cardTypes.map((card) => (
                    <Card 
                      key={card.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        formData.cardType === card.id ? 'ring-2 ring-primary bg-primary/5' : ''
                      }`}
                      onClick={() => handleInputChange('cardType', card.id)}
                    >
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <CreditCard className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{card.title}</CardTitle>
                        <div className="text-2xl font-bold text-primary">{card.price}</div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-center mb-4">{card.description}</p>
                        <div className="space-y-2">
                          {card.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Currency Selection */}
              {formData.cardType === 'multi-currency' && (
                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-bold mb-6">Select Currencies</h2>
                  <div className="grid md:grid-cols-4 gap-3">
                    {currencies.map((currency) => (
                      <Card 
                        key={currency}
                        className={`cursor-pointer transition-all duration-200 ${
                          formData.currencies.includes(currency) ? 'ring-2 ring-primary bg-primary/5' : 'hover:shadow-md'
                        }`}
                        onClick={() => handleCurrencyToggle(currency)}
                      >
                        <CardContent className="p-4 text-center">
                          <div className="font-semibold">{currency.split(' - ')[0]}</div>
                          <div className="text-sm text-muted-foreground">{currency.split(' - ')[1]}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Application Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Application</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Personal Details */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Personal Details</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="applicantName">Full Name (as per passport)</Label>
                          <Input
                            id="applicantName"
                            placeholder="Your full name"
                            value={formData.applicantName}
                            onChange={(e) => handleInputChange('applicantName', e.target.value)}
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="applicantEmail">Email</Label>
                            <Input
                              id="applicantEmail"
                              type="email"
                              placeholder="your.email@example.com"
                              value={formData.applicantEmail}
                              onChange={(e) => handleInputChange('applicantEmail', e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="applicantPhone">Phone</Label>
                            <Input
                              id="applicantPhone"
                              placeholder="+91 98765 43210"
                              value={formData.applicantPhone}
                              onChange={(e) => handleInputChange('applicantPhone', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Travel Details */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Travel Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="destination">Destination Country</Label>
                          <Select value={formData.destination} onValueChange={(value) => handleInputChange('destination', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select destination" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="US">United States</SelectItem>
                              <SelectItem value="UK">United Kingdom</SelectItem>
                              <SelectItem value="CA">Canada</SelectItem>
                              <SelectItem value="AU">Australia</SelectItem>
                              <SelectItem value="SG">Singapore</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="travelDate">Travel Date</Label>
                          <Input
                            id="travelDate"
                            type="date"
                            value={formData.travelDate}
                            onChange={(e) => handleInputChange('travelDate', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="loadAmount">Initial Load Amount (INR)</Label>
                        <Input
                          id="loadAmount"
                          type="number"
                          placeholder="Enter amount to load"
                          value={formData.loadAmount}
                          onChange={(e) => handleInputChange('loadAmount', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Document Upload */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Document Upload</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card className="border-dashed border-2 border-muted-foreground/25 hover:border-primary/50 transition-colors cursor-pointer">
                          <CardContent className="p-6 text-center">
                            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Upload PAN Card</p>
                          </CardContent>
                        </Card>
                        <Card className="border-dashed border-2 border-muted-foreground/25 hover:border-primary/50 transition-colors cursor-pointer">
                          <CardContent className="p-6 text-center">
                            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Upload Passport</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <Button className="w-full forex-gradient" size="lg">
                      Apply for Card
                      <CreditCard className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Summary Card */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {formData.cardType && (
                      <div className="flex justify-between">
                        <span>Card Type:</span>
                        <span className="font-semibold capitalize">{formData.cardType.replace('-', ' ')}</span>
                      </div>
                    )}
                    {formData.currencies.length > 0 && (
                      <div>
                        <span>Selected Currencies:</span>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {formData.currencies.map((currency) => (
                            <Badge key={currency} variant="secondary" className="text-xs">
                              {currency.split(' - ')[0]}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {formData.loadAmount && (
                      <div className="flex justify-between">
                        <span>Load Amount:</span>
                        <span className="font-semibold">₹{parseInt(formData.loadAmount).toLocaleString()}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Plane className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Quick Processing</h3>
                        <p className="text-sm text-muted-foreground">
                          Get your forex card within 2-3 working days. Express delivery available.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Benefits Tab */}
          <TabsContent value="benefits">
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Card Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'EMV Chip & PIN technology',
                    'Contactless payments',
                    'ATM withdrawals worldwide',
                    'Online & mobile app management',
                    'Real-time transaction alerts',
                    'Instant card lock/unlock',
                    'Emergency card replacement',
                    'Zero cross-currency charges'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Daily Limits</h4>
                      <p className="text-sm text-muted-foreground">ATM: $1,000 | POS: $5,000</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Validity</h4>
                      <p className="text-sm text-muted-foreground">Card valid for 5 years from issue date</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Reload</h4>
                      <p className="text-sm text-muted-foreground">Reload anytime through net banking or branch</p>
                    </div>
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