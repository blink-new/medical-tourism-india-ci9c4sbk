import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Baby, 
  Stethoscope,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export function TreatmentsSection() {
  const treatmentCategories = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      treatments: [
        {
          name: 'Heart Bypass Surgery',
          description: 'Coronary artery bypass grafting with minimal invasive techniques',
          duration: '4-6 hours',
          recovery: '7-10 days',
          costIndia: '$8,000 - $12,000',
          costUS: '$40,000 - $80,000',
          savings: '75%',
          successRate: '95%'
        },
        {
          name: 'Heart Valve Replacement',
          description: 'Replacement of damaged heart valves with advanced prosthetics',
          duration: '3-5 hours',
          recovery: '5-8 days',
          costIndia: '$6,000 - $10,000',
          costUS: '$35,000 - $70,000',
          savings: '78%',
          successRate: '93%'
        },
        {
          name: 'Angioplasty',
          description: 'Minimally invasive procedure to open blocked arteries',
          duration: '1-2 hours',
          recovery: '2-3 days',
          costIndia: '$3,000 - $5,000',
          costUS: '$15,000 - $30,000',
          savings: '80%',
          successRate: '97%'
        }
      ]
    },
    {
      id: 'neurology',
      name: 'Neurology',
      icon: Brain,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      treatments: [
        {
          name: 'Brain Tumor Surgery',
          description: 'Advanced neurosurgical procedures for brain tumor removal',
          duration: '6-8 hours',
          recovery: '10-14 days',
          costIndia: '$10,000 - $15,000',
          costUS: '$50,000 - $100,000',
          savings: '75%',
          successRate: '90%'
        },
        {
          name: 'Spine Surgery',
          description: 'Minimally invasive spinal fusion and disc replacement',
          duration: '3-5 hours',
          recovery: '7-10 days',
          costIndia: '$7,000 - $12,000',
          costUS: '$35,000 - $75,000',
          savings: '78%',
          successRate: '92%'
        },
        {
          name: 'Deep Brain Stimulation',
          description: 'Advanced treatment for Parkinson\'s and movement disorders',
          duration: '4-6 hours',
          recovery: '5-7 days',
          costIndia: '$15,000 - $20,000',
          costUS: '$80,000 - $120,000',
          savings: '80%',
          successRate: '88%'
        }
      ]
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      icon: Bone,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      treatments: [
        {
          name: 'Hip Replacement',
          description: 'Total hip replacement with ceramic or titanium implants',
          duration: '2-3 hours',
          recovery: '5-7 days',
          costIndia: '$5,000 - $8,000',
          costUS: '$25,000 - $50,000',
          savings: '75%',
          successRate: '95%'
        },
        {
          name: 'Knee Replacement',
          description: 'Complete knee joint replacement with advanced prosthetics',
          duration: '2-3 hours',
          recovery: '5-7 days',
          costIndia: '$4,500 - $7,500',
          costUS: '$20,000 - $45,000',
          savings: '78%',
          successRate: '94%'
        },
        {
          name: 'Spinal Fusion',
          description: 'Advanced spinal fusion techniques for back problems',
          duration: '3-4 hours',
          recovery: '7-10 days',
          costIndia: '$6,000 - $10,000',
          costUS: '$30,000 - $60,000',
          savings: '77%',
          successRate: '91%'
        }
      ]
    },
    {
      id: 'oncology',
      name: 'Oncology',
      icon: Stethoscope,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      treatments: [
        {
          name: 'Cancer Surgery',
          description: 'Advanced oncological surgeries with robotic assistance',
          duration: '4-8 hours',
          recovery: '7-14 days',
          costIndia: '$8,000 - $15,000',
          costUS: '$40,000 - $80,000',
          savings: '75%',
          successRate: '87%'
        },
        {
          name: 'Chemotherapy',
          description: 'Comprehensive chemotherapy treatment protocols',
          duration: 'Multiple sessions',
          recovery: 'Varies',
          costIndia: '$3,000 - $8,000',
          costUS: '$15,000 - $40,000',
          savings: '80%',
          successRate: '85%'
        },
        {
          name: 'Radiation Therapy',
          description: 'Precision radiation therapy with latest technology',
          duration: 'Multiple sessions',
          recovery: 'Varies',
          costIndia: '$4,000 - $10,000',
          costUS: '$20,000 - $50,000',
          savings: '78%',
          successRate: '88%'
        }
      ]
    }
  ]

  return (
    <section id="treatments" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary border-primary/20 mb-4">
            <Stethoscope className="w-4 h-4 mr-2" />
            Medical Treatments
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comprehensive Treatment 
            <span className="text-primary"> Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access world-class medical treatments at a fraction of the cost. Our partner hospitals 
            offer comprehensive packages with transparent pricing and guaranteed quality care.
          </p>
        </div>

        <Tabs defaultValue="cardiology" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {treatmentCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                <category.icon className={`w-4 h-4 ${category.color}`} />
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {treatmentCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.treatments.map((treatment, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                          <category.icon className={`w-6 h-6 ${category.color}`} />
                        </div>
                        <Badge className="bg-accent text-accent-foreground">
                          Save {treatment.savings}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{treatment.name}</CardTitle>
                      <p className="text-muted-foreground text-sm">{treatment.description}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{treatment.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{treatment.successRate}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Cost in India:</span>
                          <span className="font-semibold text-primary">{treatment.costIndia}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Cost in US:</span>
                          <span className="font-semibold line-through text-muted-foreground">{treatment.costUS}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className="text-sm font-medium">Recovery Time:</span>
                          <span className="font-semibold">{treatment.recovery}</span>
                        </div>
                      </div>

                      <Button className="w-full medical-gradient">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Treatment Plan?</h3>
            <p className="text-muted-foreground mb-6">
              Our medical coordinators will create a personalized treatment package based on your specific needs, 
              including hospital selection, doctor consultation, and complete travel arrangements.
            </p>
            <Button size="lg" className="medical-gradient">
              Get Personalized Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}