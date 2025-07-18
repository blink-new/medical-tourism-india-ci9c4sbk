import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  GraduationCap, 
  Heart, 
  Building, 
  Users, 
  FileText, 
  CreditCard,
  CheckCircle,
  AlertCircle,
  Calculator,
  Send
} from 'lucide-react'

export function OutwardRemittancePage() {
  const [formData, setFormData] = useState({
    purpose: '',
    amount: '',
    currency: '',
    beneficiaryName: '',
    beneficiaryCountry: '',
    applicantName: '',
    applicantEmail: '',
    applicantPhone: '',
    applicantAddress: ''
  })

  const purposes = [
    { id: 'education', icon: GraduationCap, title: 'Education', description: 'Tuition fees, living expenses, course materials' },
    { id: 'medical', icon: Heart, title: 'Medical Treatment', description: 'Hospital bills, treatment costs, medical procedures' },
    { id: 'business', icon: Building, title: 'Business', description: 'Trade payments, business investments, imports' },
    { id: 'family', icon: Users, title: 'Family Support', description: 'Maintenance of relatives, family support' }
  ]

  const documents = [
    'PAN Card',
    'Aadhaar Card',
    'Passport',
    'Visa (if applicable)',
    'Purpose-specific documents (Invoice/Admission letter/Medical estimate)',
    'Bank statements (last 6 months)',
    'Income proof (Salary slips/ITR)',
    'Form A2 (will be provided)'
  ]

  const eligibilityPoints = [
    'Indian resident individual',
    'Valid PAN card mandatory',
    'Purpose should be permissible under FEMA',
    'Proper documentation required',
    'KYC compliance necessary'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculateRate = () => {
    // Mock calculation
    if (formData.amount && formData.currency) {
      const rates: { [key: string]: number } = {
        'USD': 83.25,
        'EUR': 90.45,
        'GBP': 105.80,
        'CAD': 61.50,
        'AUD': 55.60
      }
      const rate = rates[formData.currency] || 83.25
      const inrAmount = parseFloat(formData.amount) * rate
      return { rate, inrAmount }
    }
    return null
  }

  const calculation = calculateRate()

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="text-primary border-primary/20 mb-4">
            <Send className="w-4 h-4 mr-2" />
            Outward Remittance Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Send Money Abroad</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast, secure, and compliant outward remittance services for education, medical, business, and family support
          </p>
        </div>

        <Tabs defaultValue="apply" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="apply">Apply Now</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="rates">Rates</TabsTrigger>
          </TabsList>

          {/* Apply Now Tab */}
          <TabsContent value="apply" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Purpose Selection */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold mb-6">Select Remittance Purpose</h2>
                <div className="grid md:grid-cols-4 gap-4">
                  {purposes.map((purpose) => (
                    <Card 
                      key={purpose.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        formData.purpose === purpose.id ? 'ring-2 ring-primary bg-primary/5' : ''
                      }`}
                      onClick={() => handleInputChange('purpose', purpose.id)}
                    >
                      <CardContent className="p-6 text-center">
                        <purpose.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">{purpose.title}</h3>
                        <p className="text-sm text-muted-foreground">{purpose.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Application Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Remittance Application</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Amount and Currency */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="Enter amount"
                          value={formData.amount}
                          onChange={(e) => handleInputChange('amount', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select value={formData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD - US Dollar</SelectItem>
                            <SelectItem value="EUR">EUR - Euro</SelectItem>
                            <SelectItem value="GBP">GBP - British Pound</SelectItem>
                            <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                            <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Beneficiary Details */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Beneficiary Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="beneficiaryName">Beneficiary Name</Label>
                          <Input
                            id="beneficiaryName"
                            placeholder="Full name as per documents"
                            value={formData.beneficiaryName}
                            onChange={(e) => handleInputChange('beneficiaryName', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="beneficiaryCountry">Country</Label>
                          <Select value={formData.beneficiaryCountry} onValueChange={(value) => handleInputChange('beneficiaryCountry', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="US">United States</SelectItem>
                              <SelectItem value="UK">United Kingdom</SelectItem>
                              <SelectItem value="CA">Canada</SelectItem>
                              <SelectItem value="AU">Australia</SelectItem>
                              <SelectItem value="DE">Germany</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Applicant Details */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Your Details</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="applicantName">Full Name</Label>
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
                        <div className="space-y-2">
                          <Label htmlFor="applicantAddress">Address</Label>
                          <Textarea
                            id="applicantAddress"
                            placeholder="Your complete address"
                            value={formData.applicantAddress}
                            onChange={(e) => handleInputChange('applicantAddress', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <Button className="w-full forex-gradient" size="lg">
                      Submit Application
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Rate Calculator */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calculator className="w-5 h-5 mr-2" />
                      Rate Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {calculation ? (
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            1 {formData.currency} = ₹{calculation.rate}
                          </div>
                          <div className="text-sm text-muted-foreground">Live rate</div>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center">
                            <span>You send:</span>
                            <span className="font-semibold">{formData.currency} {formData.amount}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Equivalent INR:</span>
                            <span className="font-semibold">₹{calculation.inrAmount.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-center">
                        Enter amount and currency to see live rates
                      </p>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Important Note</h3>
                        <p className="text-sm text-muted-foreground">
                          All remittances are subject to RBI guidelines and FEMA regulations. 
                          Processing time: 1-3 working days after document verification.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Eligibility Tab */}
          <TabsContent value="eligibility">
            <Card>
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eligibilityPoints.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Required Documents
                </CardTitle>
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

          {/* Rates Tab */}
          <TabsContent value="rates">
            <Card>
              <CardHeader>
                <CardTitle>Current Exchange Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { currency: 'USD', rate: '83.25', change: '+0.15' },
                    { currency: 'EUR', rate: '90.45', change: '-0.25' },
                    { currency: 'GBP', rate: '105.80', change: '+0.35' },
                    { currency: 'CAD', rate: '61.50', change: '+0.10' },
                    { currency: 'AUD', rate: '55.60', change: '+0.05' },
                    { currency: 'SGD', rate: '62.30', change: '-0.15' },
                  ].map((item, index) => (
                    <Card key={index} className="currency-card text-center p-6">
                      <div className="text-xl font-bold text-primary mb-2">{item.currency}/INR</div>
                      <div className="text-2xl font-bold mb-2">₹{item.rate}</div>
                      <div className={`text-sm font-medium ${
                        item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.change}
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}