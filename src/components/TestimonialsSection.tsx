import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Star, 
  Quote, 
  MapPin, 
  Calendar,
  Heart,
  ArrowLeft,
  ArrowRight
} from 'lucide-react'
import { useState } from 'react'

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United States",
      flag: "🇺🇸",
      treatment: "Heart Bypass Surgery",
      hospital: "AIIMS, New Delhi",
      rating: 5,
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1c2?w=100&h=100&fit=crop&crop=face",
      quote: "The level of care I received in India was exceptional. The doctors were highly skilled, the facilities were world-class, and I saved over $60,000 compared to the US. The medical tourism team handled everything seamlessly.",
      savings: "$60,000",
      beforeAfter: {
        before: "Severe chest pain, couldn't walk stairs",
        after: "Completely recovered, back to jogging"
      }
    },
    {
      name: "James Mitchell",
      country: "United Kingdom",
      flag: "🇬🇧",
      treatment: "Hip Replacement",
      hospital: "Fortis Healthcare, Gurgaon",
      rating: 5,
      date: "February 2024",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "I was amazed by the professionalism and expertise of the medical team. The surgery was successful, recovery was smooth, and the cost was a fraction of what I would have paid in the UK.",
      savings: "£35,000",
      beforeAfter: {
        before: "Severe hip pain, mobility issues",
        after: "Pain-free, full mobility restored"
      }
    },
    {
      name: "Maria Rodriguez",
      country: "Spain",
      flag: "🇪🇸",
      treatment: "Cancer Treatment",
      hospital: "Max Hospital, Delhi",
      rating: 5,
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "The oncology team provided comprehensive care with the latest technology. The treatment was successful, and the support throughout my journey was incredible. I'm cancer-free now!",
      savings: "€45,000",
      beforeAfter: {
        before: "Stage 2 breast cancer diagnosis",
        after: "Cancer-free, regular check-ups clear"
      }
    },
    {
      name: "Ahmed Al-Rashid",
      country: "UAE",
      flag: "🇦🇪",
      treatment: "Spine Surgery",
      hospital: "Medanta, Gurgaon",
      rating: 5,
      date: "December 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "The spinal fusion surgery was performed with precision. The minimally invasive technique meant faster recovery. The medical team's expertise and care exceeded my expectations.",
      savings: "$40,000",
      beforeAfter: {
        before: "Chronic back pain, limited movement",
        after: "Pain-free, returned to active lifestyle"
      }
    },
    {
      name: "Lisa Chen",
      country: "Australia",
      flag: "🇦🇺",
      treatment: "Knee Replacement",
      hospital: "Apollo Hospital, Delhi",
      rating: 5,
      date: "November 2023",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      quote: "The bilateral knee replacement surgery was life-changing. The physiotherapy support and post-operative care were excellent. I can now walk without pain for the first time in years.",
      savings: "AU$50,000",
      beforeAfter: {
        before: "Severe arthritis, walking difficulties",
        after: "Full mobility, pain-free walking"
      }
    },
    {
      name: "Robert Thompson",
      country: "Canada",
      flag: "🇨🇦",
      treatment: "Eye Surgery",
      hospital: "BLK Hospital, Delhi",
      rating: 5,
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      quote: "The retinal surgery restored my vision completely. The ophthalmology team used the latest technology, and the results exceeded my expectations. The entire experience was smooth and professional.",
      savings: "CA$25,000",
      beforeAfter: {
        before: "Severe vision impairment",
        after: "20/20 vision restored"
      }
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary border-primary/20 mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Patient Success Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Real Stories from 
            <span className="text-primary"> Happy Patients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how thousands of international patients have transformed their lives 
            through world-class medical care in India.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Left side - Patient info and quote */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                      <AvatarFallback>{currentTestimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">{currentTestimonial.name}</h3>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <span className="text-lg">{currentTestimonial.flag}</span>
                        <MapPin className="w-4 h-4" />
                        <span>{currentTestimonial.country}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <blockquote className="text-lg leading-relaxed mb-6">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Treatment:</span>
                      <span className="font-semibold">{currentTestimonial.treatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hospital:</span>
                      <span className="font-semibold">{currentTestimonial.hospital}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Savings:</span>
                      <span className="font-bold text-accent">{currentTestimonial.savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-semibold">{currentTestimonial.date}</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Before/After */}
                <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-xl font-bold mb-6 text-center">Treatment Outcome</h4>
                  
                  <div className="space-y-6">
                    <div className="bg-background rounded-lg p-4">
                      <h5 className="font-semibold text-red-600 mb-2">Before Treatment:</h5>
                      <p className="text-muted-foreground">{currentTestimonial.beforeAfter.before}</p>
                    </div>
                    
                    <div className="bg-background rounded-lg p-4">
                      <h5 className="font-semibold text-green-600 mb-2">After Treatment:</h5>
                      <p className="text-muted-foreground">{currentTestimonial.beforeAfter.after}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-4 mt-8">
                    <Button variant="outline" size="sm" onClick={prevTestimonial}>
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      {currentIndex + 1} of {testimonials.length}
                    </span>
                    <Button variant="outline" size="sm" onClick={nextTestimonial}>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={index} className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              index === currentIndex ? 'ring-2 ring-primary' : ''
            }`} onClick={() => setCurrentIndex(index)}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <span>{testimonial.flag}</span>
                      <span>{testimonial.country}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">{testimonial.treatment}</span>
                  <Badge variant="outline" className="text-accent border-accent/20">
                    Saved {testimonial.savings}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-primary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied patients who chose India for their medical treatment. 
              Get your free consultation today.
            </p>
            <Button size="lg" className="medical-gradient">
              Share Your Success Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}