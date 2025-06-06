
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Users, Award, BookOpen, Clock } from "lucide-react";

const Index = () => {
  const features = [
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
                Study in{" "}
                <span className="text-blue-600">Japan</span>,{" "}
                <span className="text-green-600">Australia</span>, or{" "}
                <span className="text-red-600">USA</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your trusted gateway to international education. Official consultancy 
                with comprehensive visa support, language training, and university partnerships since 2017.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">Start Your Journey</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Explore Services</Link>
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
                  <span className="text-sm font-medium text-gray-700">1000+ Students Placed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Iroha Consultancy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2017 in the heart of Kathmandu, Iroha Consultancy has been the trusted bridge 
              connecting ambitious Nepali students with world-class educational opportunities in Japan, 
              Australia, and the United States. Our name "Iroha" represents the beginning of knowledge 
              in Japanese culture, symbolizing your first step toward international education.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Iroha Consultancy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine official registration, experienced guidance, and genuine care 
              to provide the most comprehensive study abroad support in Nepal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our students who are now studying abroad
            </p>
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
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your International Education Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of successful students who chose Iroha Consultancy for their study abroad dreams. 
              Get personalized guidance and comprehensive support every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
