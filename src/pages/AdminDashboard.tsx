import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { 
  Users, 
  ArrowRightLeft, 
  CreditCard, 
  Banknote,
  TrendingUp,
  Download,
  Search,
  Filter,
  Edit,
  Eye,
  Settings,
  Bell,
  BarChart3,
  DollarSign
} from 'lucide-react'

interface AdminDashboardProps {
  user: any
}

export function AdminDashboard({ user }: AdminDashboardProps) {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Mock data
  const stats = [
    { icon: Users, title: 'Total Customers', value: '2,847', change: '+12%', color: 'text-blue-600' },
    { icon: ArrowRightLeft, title: 'Remittances', value: '1,234', change: '+8%', color: 'text-green-600' },
    { icon: CreditCard, title: 'Forex Cards', value: '856', change: '+15%', color: 'text-purple-600' },
    { icon: Banknote, title: 'Currency Orders', value: '567', change: '+5%', color: 'text-orange-600' }
  ]

  const recentTransactions = [
    {
      id: 'TXN001',
      customer: 'Rajesh Kumar',
      type: 'Remittance',
      amount: '$5,000',
      status: 'Completed',
      date: '2024-01-15',
      purpose: 'Education'
    },
    {
      id: 'TXN002',
      customer: 'Priya Sharma',
      type: 'Forex Card',
      amount: '€2,000',
      status: 'Processing',
      date: '2024-01-15',
      purpose: 'Travel'
    },
    {
      id: 'TXN003',
      customer: 'Amit Singh',
      type: 'Currency',
      amount: '£1,500',
      status: 'Pending',
      date: '2024-01-14',
      purpose: 'Business'
    },
    {
      id: 'TXN004',
      customer: 'Neha Gupta',
      type: 'Remittance',
      amount: '$3,200',
      status: 'Completed',
      date: '2024-01-14',
      purpose: 'Medical'
    }
  ]

  const customers = [
    {
      id: 'CUST001',
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      phone: '+91-98765-43210',
      totalTransactions: 15,
      totalValue: '$45,000',
      status: 'Active',
      joinDate: '2023-06-15'
    },
    {
      id: 'CUST002',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91-98765-43211',
      totalTransactions: 8,
      totalValue: '€18,000',
      status: 'Active',
      joinDate: '2023-08-22'
    },
    {
      id: 'CUST003',
      name: 'Amit Singh',
      email: 'amit.singh@email.com',
      phone: '+91-98765-43212',
      totalTransactions: 12,
      totalValue: '£25,000',
      status: 'Inactive',
      joinDate: '2023-04-10'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'processing':
        return 'bg-yellow-100 text-yellow-800'
      case 'pending':
        return 'bg-orange-100 text-orange-800'
      case 'failed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Show login prompt if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <p className="text-muted-foreground">Access the admin dashboard</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter username" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>
            <Button className="w-full forex-gradient">
              Login to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage customers and transactions</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="cms">CMS</TabsTrigger>
            <TabsTrigger value="api">API Integration</TabsTrigger>
          </TabsList>

          {/* Transactions Tab */}
          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Transactions</CardTitle>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search transactions..."
                        className="pl-10 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.customer}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell className="font-semibold">{transaction.amount}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(transaction.status)}>
                            {transaction.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Customer Management</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export Customers
                    </Button>
                    <Button size="sm" className="forex-gradient">
                      Add Customer
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Transactions</TableHead>
                      <TableHead>Total Value</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell className="font-medium">{customer.id}</TableCell>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.phone}</TableCell>
                        <TableCell>{customer.totalTransactions}</TableCell>
                        <TableCell className="font-semibold">{customer.totalValue}</TableCell>
                        <TableCell>
                          <Badge className={customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                            {customer.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => setSelectedCustomer(customer)}>
                                <Eye className="w-4 h-4 mr-2" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Customer Profile: {customer.name}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-semibold mb-2">Personal Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <p><span className="font-medium">Name:</span> {customer.name}</p>
                                      <p><span className="font-medium">Email:</span> {customer.email}</p>
                                      <p><span className="font-medium">Phone:</span> {customer.phone}</p>
                                      <p><span className="font-medium">Join Date:</span> {customer.joinDate}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-2">Transaction Summary</h4>
                                    <div className="space-y-2 text-sm">
                                      <p><span className="font-medium">Total Transactions:</span> {customer.totalTransactions}</p>
                                      <p><span className="font-medium">Total Value:</span> {customer.totalValue}</p>
                                      <p><span className="font-medium">Status:</span> {customer.status}</p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Recent Transactions</h4>
                                  <div className="space-y-2">
                                    {recentTransactions.filter(t => t.customer === customer.name).map((transaction) => (
                                      <div key={transaction.id} className="flex justify-between items-center p-2 bg-muted/30 rounded">
                                        <span className="text-sm">{transaction.type} - {transaction.amount}</span>
                                        <Badge className={getStatusColor(transaction.status)}>
                                          {transaction.status}
                                        </Badge>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Revenue Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>This Month</span>
                      <span className="font-bold text-2xl text-primary">₹12,45,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Last Month</span>
                      <span className="font-semibold">₹11,20,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Growth</span>
                      <span className="font-semibold text-green-600">+11.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Transaction Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Remittances</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Forex Cards</span>
                      <span className="font-semibold">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Currency Exchange</span>
                      <span className="font-semibold">20%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* CMS Tab */}
          <TabsContent value="cms">
            <Card>
              <CardHeader>
                <CardTitle>Content Management System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold mb-2">Exchange Rates</h3>
                      <p className="text-sm text-muted-foreground mb-4">Update currency rates</p>
                      <Button variant="outline" size="sm">Manage Rates</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold mb-2">Website Content</h3>
                      <p className="text-sm text-muted-foreground mb-4">Edit pages and banners</p>
                      <Button variant="outline" size="sm">Edit Content</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold mb-2">Notifications</h3>
                      <p className="text-sm text-muted-foreground mb-4">Send customer alerts</p>
                      <Button variant="outline" size="sm">Send Alerts</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API Integration Tab */}
          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>FxPlus API Integration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">API Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Connection Status</span>
                          <Badge className="bg-green-100 text-green-800">Connected</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Last Sync</span>
                          <span className="text-sm">2 minutes ago</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Transactions Synced</span>
                          <span className="font-semibold">1,234</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Sync Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" className="w-full">
                        Manual Sync Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        Configure Auto-Sync
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Sync Logs
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}