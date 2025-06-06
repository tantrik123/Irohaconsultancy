
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceData: Record<string, any> = {
    "study-japan": {
      title: "Study in Japan",
      description: "Complete guidance for pursuing higher education in Japan with comprehensive support from application to arrival.",
      hero: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=400&fit=crop",
      features: [
        "University and Language School Selection",
        "Application Support and Documentation",
        "Student Visa Processing (COE)",
        "Free Japanese Language Classes (N5-N1)",
        "Cultural Orientation and Preparation",
        "Scholarship Guidance and Applications",
        "Pre-departure Briefing",
        "Post-arrival Support Services"
      ],
      process: [
        "Initial counseling and eligibility assessment",
        "University/school selection and application",
        "Document preparation and submission",
        "Certificate of Eligibility (COE) processing",
        "Visa application and interview preparation",
        "Pre-departure orientation",
        "Arrival support and follow-up"
      ],
      requirements: [
        "Completed higher secondary education (12th grade)",
        "Basic Japanese language proficiency (N5 level)",
        "Financial capability proof",
        "Clean academic and personal records",
        "Genuine interest in Japanese culture and education"
      ]
    },
    "study-australia": {
      title: "Study in Australia", 
      description: "Expert assistance for Australian education with pathway programs and permanent residency guidance.",
      hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      features: [
        "University Applications and Course Selection",
        "Student Visa Support (Subclass 500)",
        "IELTS Preparation and Training",
        "Pathway Program Guidance",
        "Scholarship Applications",
        "Post-Study Work Visa Guidance",
        "Permanent Residency Pathway",
        "Pre-departure and Arrival Support"
      ],
      process: [
        "Course and university selection counseling",
        "Application submission and offer management",
        "IELTS preparation and test booking",
        "Student visa application process",
        "Health insurance and accommodation guidance",
        "Pre-departure orientation",
        "Airport pickup and settlement support"
      ],
      requirements: [
        "Completed 12th grade or equivalent",
        "IELTS score of 6.0 or higher",
        "Financial capacity demonstration",
        "Genuine Temporary Entrant (GTE) requirement",
        "Health and character requirements"
      ]
    },
    "study-usa": {
      title: "Study in USA",
      description: "Comprehensive support for US education including scholarship guidance and complete application assistance.",
      hero: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop",
      features: [
        "University and College Applications",
        "F-1 Student Visa Processing", 
        "TOEFL/SAT/GRE Preparation",
        "Scholarship and Financial Aid Guidance",
        "Personal Statement and Essay Support",
        "Interview Preparation",
        "I-20 Document Processing",
        "Pre-departure and Arrival Assistance"
      ],
      process: [
        "University research and selection",
        "Standardized test preparation",
        "Application completion and submission",
        "I-20 document processing",
        "F-1 visa application and interview",
        "Pre-departure orientation",
        "Arrival and initial settlement support"
      ],
      requirements: [
        "High school diploma or equivalent",
        "TOEFL/IELTS scores as per university requirements",
        "SAT/ACT scores (for undergraduate)",
        "GRE/GMAT scores (for graduate programs)",
        "Financial documents and bank statements",
        "Letters of recommendation and essays"
      ]
    },
    "visa-support": {
      title: "Visa Application Support",
      description: "Complete visa processing assistance with expert guidance and high success rates.",
      hero: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
      features: [
        "Complete Document Preparation",
        "Application Form Assistance",
        "Interview Coaching and Preparation",
        "Embassy Appointment Scheduling",
        "Document Review and Verification",
        "Application Status Tracking",
        "Rejection Analysis and Reapplication",
        "Success Rate: 95%+"
      ],
      process: [
        "Document checklist and preparation",
        "Application form completion",
        "Embassy appointment booking",
        "Mock interview sessions",
        "Final document submission",
        "Interview day support",
        "Post-interview follow-up"
      ],
      requirements: [
        "Valid passport with minimum 6 months validity",
        "Completed visa application forms",
        "Financial documents and bank statements",
        "Educational certificates and transcripts",
        "Sponsor documentation if applicable",
        "Medical examination reports (if required)"
      ]
    },
    "language-classes": {
      title: "Language Classes",
      description: "Free Japanese and English language training with certified instructors and comprehensive test preparation.",
      hero: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
      features: [
        "Japanese Classes (N5 to N1 levels)",
        "English Language Training",
        "JLPT Preparation and Practice",
        "IELTS/TOEFL Test Preparation",
        "Conversational Practice Sessions",
        "Cultural Integration Training",
        "Small Class Sizes (8-12 students)",
        "Flexible Timing Options"
      ],
      process: [
        "Language proficiency assessment",
        "Class level determination",
        "Course schedule selection",
        "Regular progress evaluations",
        "Mock test sessions",
        "Final examination preparation",
        "Certificate completion"
      ],
      requirements: [
        "Basic literacy in English/Nepali",
        "Commitment to regular attendance",
        "Participation in practice sessions",
        "Completion of assignments and homework",
        "Active participation in class activities"
      ]
    },
    "test-preparation": {
      title: "Test Preparation",
      description: "Comprehensive preparation for all major international language and aptitude tests.",
      hero: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
      features: [
        "JLPT (Japanese Language Proficiency Test)",
        "IELTS (International English Language Testing)",
        "TOEFL (Test of English as Foreign Language)",
        "NAT-Test (Nihongo Achievement Test)",
        "JLCT (Japanese Language Competency Test)",
        "JFT-Basic (Japan Foundation Test)",
        "Mock Tests and Practice Sessions",
        "Individual Progress Tracking"
      ],
      process: [
        "Initial assessment and goal setting",
        "Customized study plan creation",
        "Regular practice sessions",
        "Mock tests and performance analysis",
        "Weak area identification and improvement",
        "Final exam preparation",
        "Test registration assistance"
      ],
      requirements: [
        "Basic understanding of target language",
        "Commitment to study schedule",
        "Regular attendance at practice sessions",
        "Completion of assignments and homework",
        "Active participation in mock tests"
      ]
    }
  };

  const service = serviceData[slug || ""];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - Iroha Consultancy | Study Abroad Services</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.title} - Iroha Consultancy`} />
        <meta property="og:description" content={service.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={service.hero}
          alt={service.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-4 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-0 hover:text-iroha-red">
            <Link to="/services" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </Button>
        </div>
      </section>

      {/* Features */}
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
              What's Included
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-iroha-red transition-colors border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-iroha-red mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              Our Process
            </h2>
          </motion.div>

          <div className="space-y-6">
            {service.process.map((step: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:border-iroha-red transition-colors border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-iroha-red text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
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
              Requirements
            </h2>
          </motion.div>

          <Card className="max-w-4xl mx-auto border-2 hover:border-iroha-red transition-colors">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {service.requirements.map((requirement: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-iroha-red mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-iroha">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our expert counselors for a free consultation and personalized guidance 
              for your {service.title.toLowerCase()} journey.
            </p>
            <Button asChild size="lg" className="bg-white text-iroha-red hover:bg-gray-100">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
