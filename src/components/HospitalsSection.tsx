import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Star, 
  Users, 
  Award, 
  Phone,
  ExternalLink,
  Heart,
  Brain,
  Bone,
  Eye
} from 'lucide-react'

export function HospitalsSection() {
  const hospitals = [
    {
      name: "All India Institute of Medical Sciences (AIIMS)",
      location: "New Delhi",
      rating: 4.9,
      patients: "25,000+",
      specialties: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
      accreditation: "JCI Accredited",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop",
      description: "Premier government medical institution with world-class facilities and internationally trained doctors.",
      costSaving: "75%"
    },
    {
      name: "Fortis Healthcare",
      location: "Gurgaon",
      rating: 4.8,
      patients: "20,000+",
      specialties: ["Cardiac Surgery", "Transplants", "Cancer Care", "Neurosurgery"],
      accreditation: "NABH Accredited",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop",
      description: "Leading private healthcare provider with cutting-edge technology and personalized care.",
      costSaving: "70%"
    },
    {
      name: "Max Super Speciality Hospital",
      location: "Saket, Delhi",
      rating: 4.7,
      patients: "18,000+",
      specialties: ["Robotic Surgery", "IVF", "Gastroenterology", "Pulmonology"],
      accreditation: "JCI & NABH",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
      description: "State-of-the-art facility known for minimally invasive procedures and advanced treatments.",
      costSaving: "68%"
    },
    {
      name: "Medanta - The Medicity",
      location: "Gurgaon",
      rating: 4.8,
      patients: "22,000+",
      specialties: ["Heart Surgery", "Liver Transplant", "Spine Surgery", "Pediatrics"],
      accreditation: "JCI Accredited",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop",
      description: "Multi-specialty hospital with comprehensive care and international patient services.",
      costSaving: "72%"
    },
    {
      name: "Apollo Hospital",
      location: "Delhi",
      rating: 4.6,
      patients: "15,000+",
      specialties: ["Oncology", "Cardiology", "Nephrology", "Urology"],
      accreditation: "JCI & ISO",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      description: "Renowned healthcare chain with expertise in complex medical procedures and patient care.",
      costSaving: "65%"
    },
    {
      name: "BLK Super Speciality Hospital",
      location: "New Delhi",
      rating: 4.7,
      patients: "16,000+",
      specialties: ["Bone Marrow Transplant", "Neurosurgery", "Gastro Surgery", "Ophthalmology"],
      accreditation: "NABH Accredited",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      description: "Advanced tertiary care hospital with specialized treatments and international standards.",
      costSaving: "69%"
    }
  ]

  const getSpecialtyIcon = (specialty: string) => {
    if (specialty.toLowerCase().includes('cardio') || specialty.toLowerCase().includes('heart')) return Heart
    if (specialty.toLowerCase().includes('neuro') || specialty.toLowerCase().includes('brain')) return Brain
    if (specialty.toLowerCase().includes('ortho') || specialty.toLowerCase().includes('bone')) return Bone
    if (specialty.toLowerCase().includes('ophthal') || specialty.toLowerCase().includes('eye')) return Eye
    return Award
  }

  return (
    <section id="hospitals" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary border-primary/20 mb-4">
            <Award className="w-4 h-4 mr-2" />
            Top-Rated Hospitals
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Premier Healthcare Institutions in 
            <span className="text-primary"> Delhi NCR</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with India's most prestigious hospitals, equipped with world-class facilities, 
            internationally trained doctors, and cutting-edge medical technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitals.map((hospital, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={hospital.image} 
                  alt={hospital.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">
                    Save {hospital.costSaving}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {hospital.accreditation}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {hospital.name}
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{hospital.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-semibold">{hospital.rating}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{hospital.patients} treated</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {hospital.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.slice(0, 3).map((specialty, idx) => {
                        const IconComponent = getSpecialtyIcon(specialty)
                        return (
                          <Badge key={idx} variant="outline" className="text-xs">
                            <IconComponent className="w-3 h-3 mr-1" />
                            {specialty}
                          </Badge>
                        )
                      })}
                      {hospital.specialties.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{hospital.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 medical-gradient">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Hospitals
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}