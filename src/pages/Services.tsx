
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  FileCheck, 
  BookOpen, 
  Globe, 
  Users, 
  Award,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      slug: "study-japan",
      icon: <GraduationCap className="w-8 h-8 text-red-600" />,
      title: "Study in Japan",
      description: "Complete guidance for studying in Japan including university selection, application support, and cultural preparation.",
      features: ["University & Language School Admission", "Student Visa Processing", "Free Japanese Language Classes", "Cultural Orientation"],
      popular: true
    },
    {
      slug: "study-australia",
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Study in Australia", 
      description: "Comprehensive support for Australian education including pathway programs and permanent residency guidance.",
      features: ["University Applications", "Student Visa Support", "IELTS Preparation", "Post-Study Work Guidance"],
      popular: false
    },
    {
      slug: "study-usa",
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Study in USA",
      description: "Expert assistance for US education with scholarship guidance and comprehensive application support.",
      features: ["College Applications", "F-1 Visa Processing", "TOEFL/SAT Prep", "Scholarship Assistance"],
      popular: false
    },
    {
      slug: "visa-support",
      icon: <FileCheck className="w-8 h-8 text-purple-600" />,
      title: "Visa Application Support",
      description: "Complete visa processing assistance with document preparation and interview coaching.",
      features: ["Document Preparation", "Interview Coaching", "Application Tracking", "Success Guarantee"],
      popular: true
    },
    {
      slug: "language-classes",
      icon: <BookOpen className="w-8 h-8 text-orange-600" />,
      title: "Language Classes",
      description: "Free Japanese and English language training with certified instructors and test preparation.",
      features: ["Japanese (N5-N1)", "English (Basic-Advanced)", "JLPT Preparation", "IELTS/TOEFL Training"],
      popular: false
    },
    {
      slug: "test-preparation",
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Test Preparation",
      description: "Comprehensive test preparation for all major international language and aptitude tests.",
      features: ["JLPT (N5-N1)", "IELTS/TOEFL", "NAT-Test/JLCT", "JFT-Basic"],
      popular: false
    }
  ];

  const additionalServices = [
    "Free Document Translation (Japan)",
    "Specified Skilled Worker (SSW) Visa",
    "Immigration Guidance",
    "Post-Arrival Support",
    "Career Counseling",
    "Scholarship Applications"
  ];

  return (
    <>
      <Helmet>
        <title>Services - Study Abroad Support | Iroha Consultancy Kathmandu</title>
        <meta name="description" content="Comprehensive study abroad services including Japan, Australia, USA education consulting, visa support, language classes, and test preparation at Iroha Consultancy Kathmandu." />
        <meta property="og:title" content="Study Abroad Services - Japan, Australia, USA | Iroha Consultancy" />
        <meta property="og:description" content="Expert guidance for studying abroad with visa support, language training, and university admission assistance for Japan, Australia, and USA." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Study Abroad Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From initial counseling to post-arrival support, we provide end-to-end assistance 
              for your international education journey. Choose from our specialized services 
              designed to ensure your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
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
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized support for every aspect of your study abroad journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                      Popular
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      {service.icon}
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full group">
                      <Link to={`/services/${service.slug}`} className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Support Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support beyond the basics to ensure your complete success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                    </div>
                    <h3 className="font-semibold text-gray-900">{service}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring your success at every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Consultation", desc: "Free counseling to understand your goals and eligibility" },
              { step: "02", title: "Planning & Preparation", desc: "Customized roadmap with timeline and requirements" },
              { step: "03", title: "Application & Documentation", desc: "Complete assistance with applications and visa processing" },
              { step: "04", title: "Success & Support", desc: "Pre-departure orientation and post-arrival assistance" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Schedule a free consultation with our experts and take the first step 
              towards your international education goals.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
