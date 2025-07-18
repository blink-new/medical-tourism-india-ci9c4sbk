import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { 
  Banknote, 
  MapPin, 
  Truck, 
  Clock,
  Calculator,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Shield,
  Home
} from 'lucide-react'

export function BuyForexCurrencyPage() {
  const [formData, setFormData] = useState({
    currency: '',
    amount: '',
    amountType: 'foreign', // 'foreign' or 'inr'
    deliveryMethod: '',
    location: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: ''
  })

  const currencies = [
    { code: 'USD', name: 'US Dollar', rate: 83.25, change: '+0.15', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', rate: 90.45, change: '-0.25', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', rate: 105.80, change: '+0.35', flag: '🇬🇧' },
    { code: 'CAD', name: 'Canadian Dollar', rate: 61.50, change: '+0.10', flag: '🇨🇦' },
    { code: 'AUD', name: 'Australian Dollar', rate: 55.60, change: '+0.05', flag: '🇦🇺' },
    { code: 'SGD', name: 'Singapore Dollar', rate: 62.30, change: '-0.15', flag: '🇸🇬' },
    { code: 'JPY', name: 'Japanese Yen', rate: 0.56, change: '+0.02', flag: '🇯🇵' },
    { code: 'CHF', name: 'Swiss Franc', rate: 93.20, change: '+0.20', flag: '🇨🇭' }
  ]

  const locations = [
    'Connaught Place, Delhi',
    'Karol Bagh, Delhi',
    'Lajpat Nagar, Delhi',
    'Gurgaon, Haryana',
    'Noida, UP',
    'Faridabad, Haryana'
  ]

  const deliveryOptions = [
    {
      id: 'branch-pickup',
      title: 'Branch Pickup',
      description: 'Collect from our nearest branch',
      icon: MapPin,
      time: 'Same day',
      cost: 'Free'
    },
    {
      id: 'doorstep-delivery',
      title: 'Doorstep Delivery',
      description: 'Get currency delivered to your address',
      icon: Home,
      time: '2-4 hours',
      cost: '₹100'
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculateAmount = () => {
    if (!formData.currency || !formData.amount) return null

    const selectedCurrency = currencies.find(c => c.code === formData.currency)
    if (!selectedCurrency) return null

    const amount = parseFloat(formData.amount)
    if (formData.amountType === 'foreign') {
      // Foreign amount entered, calculate INR
      return {
        foreignAmount: amount,
        inrAmount: amount * selectedCurrency.rate,
        rate: selectedCurrency.rate
      }
    } else {
      // INR amount entered, calculate foreign
      return {
        foreignAmount: amount / selectedCurrency.rate,
        inrAmount: amount,
        rate: selectedCurrency.rate
      }
    }
  }

  const calculation = calculateAmount()

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="text-primary border-primary/20 mb-4">
            <Banknote className="w-4 h-4 mr-2" />
            Buy Forex Currency
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Buy Foreign Currency</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Purchase foreign currency at competitive rates with convenient pickup or doorstep delivery
          </p>
        </div>

        <Tabs defaultValue="buy" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="buy">Buy Currency</TabsTrigger>
            <TabsTrigger value="rates">Live Rates</TabsTrigger>
            <TabsTrigger value="locations">Our Locations</TabsTrigger>
          </TabsList>

          {/* Buy Currency Tab */}
          <TabsContent value="buy" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Currency Selection & Calculator */}
              <div className="lg:col-span-2 space-y-6">
                {/* Currency Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calculator className="w-5 h-5 mr-2" />
                      Currency Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Currency Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="currency">Select Currency</Label>
                      <Select value={formData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose currency" />
                        </SelectTrigger>
                        <SelectContent>
                          {currencies.map((currency) => (
                            <SelectItem key={currency.code} value={currency.code}>
                              <div className="flex items-center space-x-2">
                                <span>{currency.flag}</span>
                                <span>{currency.code} - {currency.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Amount Input */}
                    <div className="space-y-4">
                      <Label>Enter Amount</Label>
                      <RadioGroup 
                        value={formData.amountType} 
                        onValueChange={(value) => handleInputChange('amountType', value)}
                        className="flex space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="foreign" id="foreign" />
                          <Label htmlFor="foreign">Foreign Currency</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="inr" id="inr" />
                          <Label htmlFor="inr">Indian Rupees</Label>
                        </div>
                      </RadioGroup>
                      
                      <div className="flex space-x-2">
                        <Input
                          type="number"
                          placeholder={`Enter amount in ${formData.amountType === 'foreign' ? formData.currency || 'foreign currency' : 'INR'}`}
                          value={formData.amount}
                          onChange={(e) => handleInputChange('amount', e.target.value)}
                          className="flex-1"
                        />
                        <div className="px-3 py-2 bg-muted rounded-md text-sm font-medium min-w-[60px] flex items-center justify-center">
                          {formData.amountType === 'foreign' ? formData.currency || 'CCY' : 'INR'}
                        </div>
                      </div>
                    </div>

                    {/* Calculation Result */}
                    {calculation && (
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Exchange Rate:</span>
                              <span className="font-semibold">1 {formData.currency} = ₹{calculation.rate}</span>
                            </div>
                            <div className="border-t pt-3 space-y-2">
                              <div className="flex justify-between items-center">
                                <span>You get:</span>
                                <span className="font-bold text-lg">{formData.currency} {calculation.foreignAmount.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>You pay:</span>
                                <span className="font-bold text-lg text-primary">₹{calculation.inrAmount.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </CardContent>
                </Card>

                {/* Delivery Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {deliveryOptions.map((option) => (
                        <Card 
                          key={option.id}
                          className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                            formData.deliveryMethod === option.id ? 'ring-2 ring-primary bg-primary/5' : ''
                          }`}
                          onClick={() => handleInputChange('deliveryMethod', option.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <option.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold mb-1">{option.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                                <div className="flex justify-between text-sm">
                                  <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {option.time}
                                  </span>
                                  <span className="font-semibold">{option.cost}</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {formData.deliveryMethod === 'branch-pickup' && (
                      <div className="mt-4 space-y-2">
                        <Label htmlFor="location">Select Branch</Label>
                        <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose pickup location" />
                          </SelectTrigger>
                          <SelectContent>
                            {locations.map((location) => (
                              <SelectItem key={location} value={location}>
                                {location}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Customer Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerName">Full Name</Label>
                      <Input
                        id="customerName"
                        placeholder="Your full name"
                        value={formData.customerName}
                        onChange={(e) => handleInputChange('customerName', e.target.value)}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="customerEmail">Email</Label>
                        <Input
                          id="customerEmail"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.customerEmail}
                          onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="customerPhone">Phone</Label>
                        <Input
                          id="customerPhone"
                          placeholder="+91 98765 43210"
                          value={formData.customerPhone}
                          onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                        />
                      </div>
                    </div>
                    {formData.deliveryMethod === 'doorstep-delivery' && (
                      <div className="space-y-2">
                        <Label htmlFor="customerAddress">Delivery Address</Label>
                        <Input
                          id="customerAddress"
                          placeholder="Complete delivery address"
                          value={formData.customerAddress}
                          onChange={(e) => handleInputChange('customerAddress', e.target.value)}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {formData.currency && calculation && (
                      <>
                        <div className="flex justify-between">
                          <span>Currency:</span>
                          <span className="font-semibold">{formData.currency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Amount:</span>
                          <span className="font-semibold">{formData.currency} {calculation.foreignAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rate:</span>
                          <span className="font-semibold">₹{calculation.rate}</span>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>₹{calculation.inrAmount.toLocaleString()}</span>
                          </div>
                          {formData.deliveryMethod === 'doorstep-delivery' && (
                            <div className="flex justify-between">
                              <span>Delivery:</span>
                              <span>₹100</span>
                            </div>
                          )}
                          <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                            <span>Total:</span>
                            <span className="text-primary">
                              ₹{(calculation.inrAmount + (formData.deliveryMethod === 'doorstep-delivery' ? 100 : 0)).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                <Button className="w-full forex-gradient" size="lg">
                  Book Currency
                  <Banknote className="ml-2 h-5 w-5" />
                </Button>

                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Secure Transaction</h3>
                        <p className="text-sm text-muted-foreground">
                          All transactions are secure and RBI compliant. Pay online or at pickup.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Live Rates Tab */}
          <TabsContent value="rates">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Live Exchange Rates</h2>
                <p className="text-muted-foreground">Updated every 5 minutes</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {currencies.map((currency) => (
                  <Card key={currency.code} className="currency-card">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-2">{currency.flag}</div>
                      <div className="text-lg font-bold mb-1">{currency.code}</div>
                      <div className="text-sm text-muted-foreground mb-3">{currency.name}</div>
                      <div className="text-2xl font-bold text-primary mb-2">₹{currency.rate}</div>
                      <div className={`text-sm font-medium flex items-center justify-center ${
                        currency.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {currency.change}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Locations Tab */}
          <TabsContent value="locations">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Our Branch Locations</h2>
                <p className="text-muted-foreground">Visit our branches for instant currency exchange</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {locations.map((location, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{location}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Open: Mon-Sat 9:30 AM - 6:30 PM
                          </p>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span>Instant exchange</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span>All major currencies</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}