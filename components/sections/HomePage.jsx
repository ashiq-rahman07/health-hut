
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Calendar, 
  Shield, 
  Clock, 
  Users, 
  Heart,
  Brain,
  Bone,
  Eye,
  Baby,
  Stethoscope,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Activity,
  Zap,
  Play,
  TrendingUp
} from "lucide-react";

const HomePage = () => {
  const specialties = [
    { name: "Cardiology", icon: Heart, count: "25+ Doctors", color: "text-red-400" },
    { name: "Neurology", icon: Brain, count: "18+ Doctors", color: "text-purple-400" },
    { name: "Orthopedics", icon: Bone, count: "22+ Doctors", color: "text-blue-400" },
    { name: "Ophthalmology", icon: Eye, count: "15+ Doctors", color: "text-green-400" },
    { name: "Pediatrics", icon: Baby, count: "20+ Doctors", color: "text-pink-400" },
    { name: "General", icon: Stethoscope, count: "30+ Doctors", color: "text-cyan-400" },
  ];

  const features = [
    {
      icon: Search,
      title: "Find Specialists",
      description: "Search through our extensive network of qualified medical professionals"
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Schedule appointments with just a few clicks, available 24/7"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your medical data is protected with enterprise-grade security"
    },
    {
      icon: Clock,
      title: "Quick Consultations",
      description: "Get expert medical advice through video calls or in-person visits"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image: "/placeholder.svg",
      rating: 5,
      text: "Amazing platform! Found the perfect cardiologist and booking was seamless."
    },
    {
      name: "Michael Chen",
      role: "Patient", 
      image: "/placeholder.svg",
      rating: 5,
      text: "The doctors here are top-notch. Highly recommend for anyone seeking quality healthcare."
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      image: "/placeholder.svg", 
      rating: 5,
      text: "Fast, reliable, and professional. This platform revolutionized my healthcare experience."
    }
  ];

  const stats = [
    { number: "500+", label: "Expert Doctors", icon: Users },
    { number: "50K+", label: "Happy Patients", icon: Heart },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "98%", label: "Success Rate", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 mr-2" />
                #1 Healthcare Platform
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Your Health,
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Connect with world-class healthcare professionals. Book appointments instantly, 
                get expert consultations, and take control of your health journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  <Link to="/doctors">
                    Find Doctors Now
                    <Search className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group border-slate-600 text-slate-300 hover:bg-slate-800/50 px-8 py-4 text-lg backdrop-blur-sm">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-slate-400">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-slate-400">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-slate-400">Success Rate</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative animate-fade-in delay-300">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center" 
                    alt="Modern Healthcare" 
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 floating">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">24/7 Available</div>
                        <div className="text-slate-300 text-sm">Emergency Care</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 floating delay-1000">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">98% Success</div>
                        <div className="text-slate-300 text-sm">Treatment Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Experience Healthcare <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Discover why thousands trust us with their healthcare needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Specialties Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              Medical Specialties
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Expert Care in <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Every Field</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Access specialized healthcare across all medical disciplines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-xl bg-slate-700/30 group-hover:scale-110 transition-transform ${specialty.color} relative z-10`}>
                      <specialty.icon className="w-8 h-8" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">{specialty.name}</h3>
                      <p className="text-slate-400">{specialty.count}</p>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <stat.icon className="w-12 h-12 mx-auto text-blue-400" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-xl text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Patients Say</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real stories from people who trust us with their health
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-slate-700 text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 backdrop-blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30">
            Get Started Today
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Health Journey?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join thousands of patients who have found their perfect healthcare match. 
            Your wellness journey starts with a single click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
              <Link to="/doctors">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Appointment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800/50 px-8 py-4 text-lg backdrop-blur-sm">
              <Link to="/signup">
                Join Our Community
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-950/80 backdrop-blur-sm py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MediCare+</h3>
              <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
                Revolutionizing healthcare accessibility with cutting-edge technology 
                and compassionate care. Your health, our commitment.
              </p>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>hello@medicare.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Healthcare District, Medical City</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Access</h4>
              <ul className="space-y-3">
                <li><Link to="/doctors" className="text-slate-400 hover:text-blue-400 transition-colors">Find Doctors</Link></li>
                <li><Link to="/specialties" className="text-slate-400 hover:text-blue-400 transition-colors">Specialties</Link></li>
                <li><Link to="/emergency" className="text-slate-400 hover:text-blue-400 transition-colors">Emergency Care</Link></li>
                <li><Link to="/telemedicine" className="text-slate-400 hover:text-blue-400 transition-colors">Telemedicine</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                <li><Link to="/help" className="text-slate-400 hover:text-blue-400 transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 MediCare+. All rights reserved. Transforming healthcare, one patient at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
