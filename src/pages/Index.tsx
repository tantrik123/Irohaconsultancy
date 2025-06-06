
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Users, Award, BookOpen, Clock, GraduationCap, FileText, Languages, MapPin, ArrowRight, Star, Target, Calendar, Plane } from "lucide-react";

const Index = () => {
  const whyChooseUsFeatures = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Officially Registered in Japan",
      description: "Trusted partnership with Japanese institutions"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Multilingual Expert Team",
      description: "Real experience studying and working abroad"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "University Partnerships",
      description: "Direct connections with top educational institutions"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-orange-600" />,
      title: "Free Language Classes",
      description: "Japanese and English language training included"
    },
    {
      icon: <Globe className="w-6 h-6 text-teal-600" />,
      title: "Comprehensive Visa Support",
      description: "High success rate with complete documentation"
    },
    {
      icon: <Clock className="w-6 h-6 text-red-600" />,
      title: "Honest & Helpful Guidance",
      description: "Transparent process with personalized attention"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      title: "50+ Partner Institutions",
      description: "Wide network of universities and schools"
    },
    {
      icon: <FileText className="w-6 h-6 text-green-500" />,
      title: "100% Visa Process Guidance",
      description: "End-to-end support for visa applications"
    }
  ];

  const services = [
    {
      title: "Study Abroad Counseling",
      description: "Personalized guidance for Japan, Australia, and USA",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      link: "/services/counseling"
    },
    {
      title: "Visa Support",
      description: "Complete visa application and interview preparation",
      icon: <FileText className="w-8 h-8 text-green-600" />,
      link: "/services/visa-support"
    },
    {
      title: "Language Training",
      description: "Japanese and English language classes",
      icon: <Languages className="w-8 h-8 text-purple-600" />,
      link: "/services/language-classes"
    },
    {
      title: "Test Preparation",
      description: "JLPT, IELTS, TOEFL, and other exam prep",
      icon: <BookOpen className="w-8 h-8 text-orange-600" />,
      link: "/services/test-prep"
    },
    {
      title: "Document Translation",
      description: "Free document translation for Japan-bound students",
      icon: <FileText className="w-8 h-8 text-teal-600" />,
      link: "/services/translation"
    },
    {
      title: "SSW Programs",
      description: "Specified Skilled Worker visa programs for Japan",
      icon: <Users className="w-8 h-8 text-red-600" />,
      link: "/services/ssw-programs"
    }
  ];

  const destinations = [
    {
      flag: "🇯🇵",
      country: "Japan",
      description: "Experience world-class education and rich cultural heritage",
      link: "/services/study-japan"
    },
    {
      flag: "🇦🇺",
      country: "Australia",
      description: "High-quality education in a multicultural environment",
      link: "/services/study-australia"
    },
    {
      flag: "🇺🇸",
      country: "USA",
      description: "Access to top universities and cutting-edge research",
      link: "/services/study-usa"
    }
  ];

  const languageTests = [
    { name: "JLPT", description: "Japanese Language Proficiency Test" },
    { name: "JFT", description: "Japan Foundation Test" },
    { name: "NAT-Test", description: "Nihongo Achievement Test" },
    { name: "JLCT", description: "Japanese Language Competency Test" },
    { name: "IELTS", description: "International English Testing System" },
    { name: "TOEFL", description: "Test of English as a Foreign Language" }
  ];

  const processSteps = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Free Consultation",
      description: "Discuss your goals and get personalized advice"
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Application Support",
      description: "Complete assistance with university applications"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Language/Test Prep",
      description: "Comprehensive preparation for required exams"
    },
    {
      icon: <Plane className="w-8 h-8 text-orange-600" />,
      title: "Visa Approval & Departure",
      description: "Successful visa processing and pre-departure guidance"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      destination: "Tokyo, Japan",
      text: "Iroha Consultancy made my dream of studying in Japan a reality. Their guidance through the visa process was exceptional.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rajesh Thapa",
      destination: "Sydney, Australia", 
      text: "Professional service and honest advice. They helped me get into my preferred university in Australia.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sita Poudel",
      destination: "California, USA",
      text: "The language classes and test preparation were excellent. Now I'm studying computer science in the US!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "500+", label: "Students Guided" },
    { number: "3", label: "Countries Supported" },
    { number: "100%", label: "Visa Process Guidance" },
    { number: "50+", label: "Partner Institutions" }
  ];

  const blogPreviews = [
    {
      title: "Complete Guide to Student Visa for Japan",
      excerpt: "Everything you need to know about the Japanese student visa application process.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      slug: "japan-student-visa-guide"
    },
    {
      title: "JLPT Preparation Tips for Success",
      excerpt: "Expert strategies to pass the Japanese Language Proficiency Test.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      slug: "jlpt-preparation-tips"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Iroha Consultancy - Study Abroad in Japan, Australia, USA | Kathmandu</title>
        <meta name="description" content="Official study abroad consultancy in Kathmandu helping Nepali students pursue education in Japan, Australia, and USA. Visa support, language classes, and university admission guidance since 2017." />
        <meta property="og:title" content="Iroha Consultancy - Your Gateway to International Education" />
        <meta property="og:description" content="Study abroad consultancy in Kathmandu helping students pursue education in Japan, Australia, and USA with comprehensive visa and admission support." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Iroha Consultancy",
            "description": "Study abroad consultancy helping students from Nepal study in Japan, Australia, and USA",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dillibazar",
              "addressLocality": "Kathmandu",
              "addressCountry": "Nepal"
            },
            "telephone": "+977-9840175421",
            "email": "info@irohaconsultancy.com",
            "foundingDate": "2017",
            "url": "https://irohaconsultancy.com"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Gateway to{" "}
                <span className="text-blue-600">Japan</span>,{" "}
                <span className="text-green-600">Australia</span> & the{" "}
                <span className="text-red-600">USA</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We simplify your study abroad journey — from language prep to visa success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">🎓 Get Free Counseling</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">📖 Explore Services</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Student using laptop for online learning"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">500+ Students Guided</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2017 in the heart of Kathmandu, Iroha Consultancy is a Nepal-based consultancy 
              with a mission to simplify overseas education. Our name "Iroha" represents the beginning 
              of knowledge in Japanese culture, symbolizing your first step toward international education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine official registration, experienced guidance, and genuine care 
              to provide the most comprehensive study abroad support in Nepal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive support for your study abroad journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                        <Link to={service.link} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Where Can You Go?</h2>
            <p className="text-lg text-gray-600">
              Explore top study destinations with our expert guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{destination.flag}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {destination.country}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {destination.description}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={destination.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Language & Test Preparation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Language & Test Preparation</h2>
            <p className="text-lg text-gray-600">
              Comprehensive preparation for all major language and proficiency tests
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {languageTests.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{test.name}</h3>
                    <p className="text-xs text-gray-600">{test.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Free Classes", description: "No hidden fees for basic language courses", icon: <BookOpen className="w-6 h-6 text-blue-600" /> },
              { title: "Flexible Schedules", description: "Classes that fit your timeline", icon: <Calendar className="w-6 h-6 text-green-600" /> },
              { title: "Certified Trainers", description: "Expert instructors with proven results", icon: <Award className="w-6 h-6 text-purple-600" /> }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-lg text-gray-600">
              Our proven 4-step process to your study abroad success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 border-4 border-gray-100">
                      {step.icon}
                    </div>
                    <div className="pt-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SSW Programs Info */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Skilled Worker Programs for Japan
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Specialized programs for careers in Caregiving, Factory Work, Hospitality, and more. 
              Get direct pathway to work in Japan with our SSW visa support.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/services/ssw-programs">Learn About SSW Programs</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-lg text-gray-600">Hear from our students who are now studying abroad</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.destination}</p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Resources & Guides</h2>
            <p className="text-lg text-gray-600">Expert insights and helpful guides for your study abroad journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPreviews.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-700 font-medium">
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">View All Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start your journey with Iroha — 100% visa support, no hidden fees
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join thousands of successful students who chose Iroha Consultancy for their study abroad dreams. 
              Get personalized guidance and comprehensive support every step of the way.
            </p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link to="/contact">Schedule Free Counseling</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office in Dillibazar</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Dillibazar, Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Sun-Fri: 10AM-6PM</span>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild size="lg">
                  <Link to="/contact">📍 Get Directions</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop"
                alt="Modern office building"
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
