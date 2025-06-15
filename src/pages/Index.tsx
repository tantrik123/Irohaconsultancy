import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Globe,
  Users,
  Award,
  BookOpen,
  Clock,
  GraduationCap,
  FileText,
  Languages,
  MapPin,
  ArrowRight,
  Star,
  Target,
  Calendar,
  Plane,
  Phone,
  Mail,
} from "lucide-react";
const Index = () => {
  const whyChooseUsFeatures = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Officially Registered in Japan",
      description: "Trusted partnership with Japanese institutions",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Multilingual Expert Team",
      description: "Real experience studying and working abroad",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "University Partnerships",
      description: "Direct connections with top educational institutions",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-orange-600" />,
      title: "Free Language Classes",
      description: "Japanese and English language training included",
    },
    {
      icon: <Globe className="w-6 h-6 text-teal-600" />,
      title: "Comprehensive Visa Support",
      description: "High success rate with complete documentation",
    },
    {
      icon: <Clock className="w-6 h-6 text-red-600" />,
      title: "Honest & Helpful Guidance",
      description: "Transparent process with personalized attention",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      title: "50+ Partner Institutions",
      description: "Wide network of universities and schools",
    },
    {
      icon: <FileText className="w-6 h-6 text-green-500" />,
      title: "100% Visa Process Guidance",
      description: "End-to-end support for visa applications",
    },
  ];
  const services = [
    {
      title: "Study In USA",
      description: "Personalized guidance for USA",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      link: "/services/study-usa",
    },
    {
      title: "Visa Support",
      description: "Complete visa application and interview preparation",
      icon: <FileText className="w-8 h-8 text-green-600" />,
      link: "/services/visa-support",
    },
    {
      title: "Language Training",
      description: "Japanese and English language classes",
      icon: <Languages className="w-8 h-8 text-purple-600" />,
      link: "/services/language-classes",
    },
    {
      title: "Test Preparation",
      description: "JLPT, IELTS, TOEFL, and other exam prep",
      icon: <BookOpen className="w-8 h-8 text-orange-600" />,
      link: "/services/test-preparation",
    },
    {
      title: "Study in Australia",
      description: "Comprehensive support for Australian education ",
      icon: <GraduationCap className="w-8 h-8 text-teal-600" />,
      link: "/services/study-australia",
    },
    {
      title: "Study in Japan",
      description: "Complete guidance for studying in Japan",
      icon: <Users className="w-8 h-8 text-red-600" />,
      link: "/services/study-japan",
    },
  ];
  const destinations = [
    {
      flag: "Jp",
      country: "Japan",
      description:
        "Experience world-class education and rich cultural heritage",
      link: "/services/study-japan",
    },
    {
      flag: "🇦🇺",
      country: "Australia",
      description: "High-quality education in a multicultural environment",
      link: "/services/study-australia",
    },
    {
      flag: "🇺🇸",
      country: "USA",
      description: "Access to top universities and cutting-edge research",
      link: "/services/study-usa",
    },
  ];
  const languageTests = [
    {
      name: "JLPT",
      description: "Japanese Language Proficiency Test",
    },
    {
      name: "JFT",
      description: "Japan Foundation Test",
    },
    {
      name: "NAT-Test",
      description: "Nihongo Achievement Test",
    },
    {
      name: "JLCT",
      description: "Japanese Language Competency Test",
    },
    {
      name: "IELTS",
      description: "International English Testing System",
    },
    {
      name: "TOEFL",
      description: "Test of English as a Foreign Language",
    },
  ];
  const processSteps = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Free Consultation",
      description: "Discuss your goals and get personalized advice",
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Application Support",
      description: "Complete assistance with university applications",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Language/Test Prep",
      description: "Comprehensive preparation for required exams",
    },
    {
      icon: <Plane className="w-8 h-8 text-orange-600" />,
      title: "Visa Approval & Departure",
      description: "Successful visa processing and pre-departure guidance",
    },
  ];
  const stats = [
    {
      number: "500+",
      label: "Students Guided",
    },
    {
      number: "3",
      label: "Countries Supported",
    },
    {
      number: "100%",
      label: "Visa Process Guidance",
    },
    {
      number: "50+",
      label: "Partner Institutions",
    },
  ];
  const blogPreviews = [
    {
      title: "Complete Guide to Student Visa for Japan",
      excerpt:
        "Everything you need to know about the Japanese student visa application process.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      slug: "japan-student-visa-guide",
    },
    {
      title: "JLPT Preparation Tips for Success",
      excerpt:
        "Expert strategies to pass the Japanese Language Proficiency Test.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      slug: "jlpt-preparation-tips",
    },
  ];
  return (
    <>
      <Helmet>
        <title>
          Iroha Consultancy - Study Abroad in Japan, Australia, USA | Kathmandu
        </title>
        <meta
          name="description"
          content="Official study abroad consultancy in Kathmandu helping Nepali students pursue education in Japan, Australia, and USA. Visa support, language classes, and university admission guidance since 2017."
        />
        <meta
          property="og:title"
          content="Iroha Consultancy - Your Gateway to International Education"
        />
        <meta
          property="og:description"
          content="Study abroad consultancy in Kathmandu helping students pursue education in Japan, Australia, and USA with comprehensive visa and admission support."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Iroha Consultancy",
            description:
              "Study abroad consultancy helping students from Nepal study in Japan, Australia, and USA",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dillibazar",
              addressLocality: "Kathmandu",
              addressCountry: "Nepal",
            },
            telephone: "+977-9840175421",
            email: "info@irohaconsultancy.com",
            foundingDate: "2017",
            url: "https://irohaconsultancy.com",
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Gateway to <span className="text-iroha-red">Japan</span>,{" "}
                <span className="text-green-600">Australia</span> & the{" "}
                <span className="text-blue-600">USA</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                We simplify your study abroad journey — from language prep to
                visa success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-iroha-red hover:bg-iroha-red-dark shadow-lg text-base px-8 py-6"
                >
                  <Link to="/contact">🎓 Get Free Counseling</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-iroha-red text-iroha-red hover:bg-red-50 text-base px-8 py-6"
                >
                  <Link to="/services">📖 Explore Services</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="relative order-first lg:order-last"
            >
              <div className="relative">
                <img
                  alt="Student using laptop for online learning"
                  className="rounded-2xl shadow-2xl w-full"
                  loading="lazy"
                  src="/lovable-uploads/9c052713-5c7b-46dc-b101-6729c025f3ef.jpg"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">
                      100+ Students Sent
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-iroha-red text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs">Visa Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-iroha-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-red-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-red-100 text-iroha-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Our Journey
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Founded in 2017 in the heart of Kathmandu, Iroha Consultancy is a
              Nepal-based consultancy with a mission to simplify overseas
              education. Our name "Iroha" represents the beginning of knowledge
              in Japanese culture, symbolizing your first step toward
              international education.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 rounded-xl bg-red-50">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Established 2017
                </h3>
                <p className="text-gray-600 text-sm">
                  7+ years of trusted service
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-red-50">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Kathmandu Based
                </h3>
                <p className="text-gray-600 text-sm">
                  Serving students across Nepal
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-red-50">
                <div className="text-3xl mb-3">🌏</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Global Reach
                </h3>
                <p className="text-gray-600 text-sm">Partners worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine official registration, experienced guidance, and
              genuine care to provide the most comprehensive study abroad
              support in Nepal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-red-100 text-iroha-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              Complete Support Services
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support for your study abroad journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                        <Link
                          to={service.link}
                          className="text-iroha-red hover:text-iroha-red-dark text-sm font-medium inline-flex items-center group"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-red-100 text-iroha-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              Study Destinations
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Where Can You Go?
            </h2>
            <p className="text-lg text-gray-600">
              Explore top study destinations with our expert guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Study in {destination.country}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {destination.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-iroha-red text-iroha-red hover:bg-red-50"
                    >
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-red-100 text-iroha-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              Language Excellence
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Language & Test Preparation
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive preparation for all major language and proficiency
              tests
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {languageTests.map((test, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 border group hover:border-iroha-red">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-iroha-red transition-colors">
                      {test.name}
                    </h3>
                    <p className="text-xs text-gray-600">{test.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Free Classes",
                description: "No hidden fees for basic language courses",
                icon: <BookOpen className="w-8 h-8 text-iroha-red" />,
              },
              {
                title: "Flexible Schedules",
                description: "Classes that fit your timeline",
                icon: <Calendar className="w-8 h-8 text-green-600" />,
              },
              {
                title: "Certified Trainers",
                description: "Expert instructors with proven results",
                icon: <Award className="w-8 h-8 text-purple-600" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-red-100 text-iroha-red p-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Process
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-lg text-gray-600">
              Our proven 4-step process to your study abroad success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative"
              >
                <Card className="h-full pt-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <CardContent className="text-center">
                    <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="pt-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-red-100 text-iroha-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Gallery
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Take a look at our office, events, and student success stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                image: "/lovable-uploads/WhatsApp1.jpg",
                title: "Office Environment",
                description: "Our modern office in Dillibazar",
              },
              {
                image: "/lovable-uploads/WhatsApp2.jpg",
                title: "Student Counseling",
                description: "One-on-one guidance sessions",
              },
              {
                image: "/lovable-uploads/WhatsApp3.jpg",
                title: "Language Classes",
                description: "Interactive learning environment",
              },
              {
                image: "/lovable-uploads/WhatsApp4.jpg",
                title: "Group Sessions",
                description: "Collaborative learning activities",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SSW Programs Info */}
      <section className="py-16 md:py-20 bg-iroha-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              🇯🇵 Work in Japan
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Skilled Worker Programs for Japan
            </h2>
            <p className="text-lg md:text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Specialized programs for careers in Caregiving, Factory Work,
              Hospitality, and more. Get direct pathway to work in Japan with
              our SSW visa support.
            </p>
            <Button asChild size="lg" className="bg-white text-iroha-red hover:bg-gray-100 shadow-lg">
              <Link to="/blog/japan-skilled-worker-guide-2024">Learn About SSW Programs</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://b7a33996256e4d90a5a23ed9e52a5aa1.elf.site/"
            width="100%"
            height="600"
          ></iframe>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-red-100 text-iroha-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              Knowledge Hub
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Free Resources & Guides
            </h2>
            <p className="text-lg text-gray-600">
              Expert insights and helpful guides for your study abroad journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Best Japanese Consultancy in Kathmandu 2024: Why Iroha Stands Out",
                excerpt: "Discover why Iroha Consultancy is recognized as the leading Japanese education consultancy in Kathmandu with proven success rates and comprehensive support.",
                image: "/photos/consultancy.jpg",
                slug: "best-japanese-consultancy-kathmandu-2024",
                category: "Consultancy Guide",
                readTime: "12 min read",
                publishDate: "2024-06-05"
              },
              {
                title: "Complete Guide to Japan Student Visa Application 2024",
                excerpt: "Everything you need to know about applying for a Japanese student visa, including required documents, timeline, and success tips from Nepal.",
                image: "/photos/japppan.jpg",
                slug: "japan-student-visa-guide-2024",
                category: "Visa Guide",
                readTime: "15 min read",
                publishDate: "2024-06-01"
              },
              {
                title: "Studying in Australia vs Japan: Complete Comparison for Nepalese Students",
                excerpt: "A side-by-side comparison of studying in Australia and Japan for Nepalese students — covering cost, visa, language, part-time jobs, PR options, and cultural differences.",
                image: "/photos/australia.jpg",
                slug: "study-australia-vs-japan-2024",
                category: "Study Abroad",
                readTime: "14 min read",
                publishDate: "2024-06-10"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden group relative">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Read more about ${post.title}`}
                  />
                  <CardContent className="p-0 relative">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-iroha-red bg-red-50 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="text-iroha-red hover:text-iroha-red-dark font-medium inline-flex items-center group relative z-20">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-iroha-red text-iroha-red hover:bg-red-50"
            >
              <Link to="/blog">View All Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Start your journey with Iroha — 100% visa support, no hidden fees
            </h2>
            <p className="text-lg md:text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join thousands of successful students who chose Iroha Consultancy
              for their study abroad dreams. Get personalized guidance and
              comprehensive support every step of the way.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-lg"
            >
              <Link to="/contact">Schedule Free Counseling</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="inline-flex items-center bg-red-100 text-iroha-red px-4 py-2 rounded-full text-sm font-medium mb-6">
                Visit Our Office
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Visit Our Office in Dillibazar
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-iroha-red" />
                  <span className="text-gray-700">
                    Dillibazar, Kathmandu, Nepal
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Sun-Fri: 10AM-6PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+977-9840175421</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    info@irohaconsultancy.com
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-iroha-red hover:bg-iroha-red-dark"
                >
                  <Link to="/contact">📍 Get Directions</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <div className="relative">
                <img
                  src="\photos\CTAphoto.jpg"
                  alt="Modern office building"
                  className="rounded-xl shadow-lg w-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iroha-red/20 to-transparent rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Index;
