
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-iroha-red" />,
      title: "Visit Our Office",
      details: ["Dillibazar, Kathmandu", "Nepal"],
      note: "Easily accessible by public transport"
    },
    {
      icon: <Phone className="w-6 h-6 text-iroha-red" />,
      title: "Call Us",
      details: ["+977-9840175421"],
      note: "Available during business hours"
    },
    {
      icon: <Mail className="w-6 h-6 text-iroha-red" />,
      title: "Email Us",
      details: ["info@irohaconsultancy.com"],
      note: "We'll respond within 24 hours"
    },
    {
      icon: <Clock className="w-6 h-6 text-iroha-red" />,
      title: "Business Hours",
      details: ["Sunday - Friday: 10:00 AM - 6:00 PM", "Saturday: Closed"],
      note: "Emergency consultations available"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Iroha Consultancy - Study Abroad Consultation | Kathmandu</title>
        <meta name="description" content="Contact Iroha Consultancy in Dillibazar, Kathmandu for study abroad consultation. Call +977-9840175421 or email info@irohaconsultancy.com for Japan, Australia, USA education guidance." />
        <meta property="og:title" content="Contact Iroha Consultancy - Free Study Abroad Consultation" />
        <meta property="og:description" content="Get in touch with our study abroad experts in Kathmandu for personalized guidance on studying in Japan, Australia, and USA." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "EducationalOrganization",
              "name": "Iroha Consultancy",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dillibazar",
                "addressLocality": "Kathmandu",
                "addressCountry": "Nepal"
              },
              "telephone": "+977-9840175421",
              "email": "info@irohaconsultancy.com",
              "openingHours": "Mo-Fr 10:00-18:00"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative gradient-iroha py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch with Our Experts
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ready to start your study abroad journey? Our experienced counselors are here 
              to provide personalized guidance and answer all your questions about studying 
              in Japan, Australia, or the USA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow border-2 hover:border-iroha-red">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-700 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      {info.note}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <MessageSquare className="w-6 h-6 text-iroha-red" />
                    <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <Input 
                          id="firstName" 
                          placeholder="Your first name"
                          required
                          className="focus:ring-iroha-red focus:border-iroha-red"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <Input 
                          id="lastName" 
                          placeholder="Your last name"
                          required
                          className="focus:ring-iroha-red focus:border-iroha-red"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        required
                        className="focus:ring-iroha-red focus:border-iroha-red"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+977-XXXXXXXXXX"
                        className="focus:ring-iroha-red focus:border-iroha-red"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                        Study Destination Interest
                      </label>
                      <select 
                        id="interest" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iroha-red focus:border-iroha-red"
                      >
                        <option value="">Select your interest</option>
                        <option value="japan">Study in Japan</option>
                        <option value="australia">Study in Australia</option>
                        <option value="usa">Study in USA</option>
                        <option value="multiple">Multiple Countries</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        rows={4}
                        placeholder="Tell us about your study abroad goals, preferred course, budget, or any specific questions..."
                        required
                        className="focus:ring-iroha-red focus:border-iroha-red"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-iroha-red hover:bg-iroha-red-dark">
                      Send Message
                    </Button>
                    
                    <p className="text-sm text-gray-500 text-center">
                      * Required fields. We'll respond within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
                  
                  {/* Google Maps Embed */}
                  <div className="rounded-lg overflow-hidden mb-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3871438164006!2d85.32532267611367!3d27.705330625579244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19007f6d0e51%3A0x33a303545c67d0c9!2sIROHA%20Japanese%20Education%20Consultancy!5e0!3m2!1sen!2snp!4v1749218982043!5m2!1sen!2snp" 
                      width="100%" 
                      height="300" 
                      style={{border:0}} 
                      allowFullScreen
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Iroha Consultancy Location"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Office Address</h4>
                      <p className="text-gray-600">
                        Dillibazar, Kathmandu<br />
                        Nepal
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Public Transport</h4>
                      <p className="text-gray-600">
                        Easily accessible by local buses and taxis from major areas of Kathmandu. 
                        Located in the heart of Dillibazar with nearby landmarks for easy navigation.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                      <p className="text-gray-600">
                        Limited street parking available. We recommend using public transport 
                        for convenience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Do you charge for initial consultation?",
                a: "No, our initial consultation is completely free. We believe in understanding your goals before recommending our services."
              },
              {
                q: "How long does the visa process take?",
                a: "Visa processing time varies by country. Japan typically takes 2-3 months, Australia 4-6 weeks, and USA 2-4 weeks after document submission."
              },
              {
                q: "Do you provide language classes?",
                a: "Yes, we offer free Japanese and English language classes for our students, including JLPT and IELTS preparation."
              },
              {
                q: "What are your success rates?",
                a: "We maintain a high success rate of over 95% for visa approvals due to our thorough preparation and expert guidance."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-iroha-red transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
