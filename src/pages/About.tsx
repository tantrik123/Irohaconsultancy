import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Users, Award, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description:
        "We maintain the highest standards in education consulting and student support services.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Trust",
      description:
        "Building lasting relationships through transparent communication and honest guidance.",
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Success",
      description:
        "Committed to achieving the best outcomes for every student's educational journey.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: "Global Reach",
      description:
        "Connecting Nepal with world-class educational opportunities across three continents.",
    },
  ];

  const teamMembers = [
    {
      name: "Sohail Khan",
      role: "Founder",
      description:
        "The visionary behind Iroha, Sohail brings years of experience in international education consulting. His mission is to provide students with clear, honest guidance and a smooth pathway to studying in Japan. With a deep understanding of Japanese culture and education systems, he ensures Iroha remains a trusted name in Kathmandu.",
      avatar: "/lovable-uploads/ourteam1.jpg",
      initials: "SK",
    },
    {
      name: "Shafique Khan",
      role: "Managing Director",
      description:
        "Shafique oversees the day-to-day operations, team coordination, and student services. Known for his problem-solving skills and student-first approach, he ensures that every applicant receives personalized attention and that our services meet the highest standards.",
      avatar: "/lovable-uploads/ourteam2.jpg",
      initials: "SHK",
    },
    {
      name: "Laxmi Shrestha",
      role: "Co-founder",
      description:
        "With a strong background in student counseling and administration, Laxmi plays a key role in building student relationships and managing backend processes. Her dedication ensures a smooth experience from application to visa approval, helping students feel confident every step of the way.",
      avatar: "/lovable-uploads/ourteam3.jpg",
      initials: "LS",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          About Iroha Consultancy - Study Abroad Experts Since 2017 | Kathmandu
        </title>
        <meta
          name="description"
          content="Learn about Iroha Consultancy's mission to help Nepali students study abroad in Japan, Australia, and USA. Founded in 2017 in Kathmandu with official registration and expert guidance."
        />
        <meta
          property="og:title"
          content="About Iroha Consultancy - Your Gateway to International Education"
        />
        <meta
          property="og:description"
          content="Founded in 2017 in Kathmandu, Iroha Consultancy is your trusted partner for studying abroad with official registration and comprehensive support."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Gateway to
                <span className="text-blue-600"> International Education</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Since 2017, Iroha Consultancy has been transforming dreams into
                reality, connecting ambitious students from Nepal with
                world-class educational opportunities in Japan, Australia, and
                the United States.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/lovable-uploads/aboutus.jpg"
                alt="Mountain landscape representing reaching new heights"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/lovable-uploads/ourstory.jpg"
                alt="Professional consultation meeting"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in the vibrant heart of Dillibazar, Kathmandu, Iroha
                  Consultancy began with a simple yet powerful vision: to make
                  international education accessible to every deserving student
                  in Nepal.
                </p>
                <p>
                  Our journey started when our founders, having experienced the
                  challenges of studying abroad firsthand, recognized the need
                  for genuine, comprehensive support for Nepali students
                  aspiring to pursue education overseas.
                </p>
                <p>
                  The name "Iroha" holds special significance - in Japanese
                  culture, it represents the beginning of learning, the
                  foundation of knowledge. This perfectly embodies our role as
                  the starting point for your international education journey.
                </p>
                <p>
                  Today, with official registration and partnerships with
                  prestigious institutions, we continue to bridge the gap
                  between dreams and reality, having successfully guided over
                  1,000 students to their desired destinations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide comprehensive, honest, and personalized guidance
                    to students from Nepal seeking quality education abroad. We
                    are committed to simplifying the complex process of
                    international education through expert counseling, visa
                    support, and continuous assistance throughout the student
                    journey.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted and preferred educational consultancy
                    in Nepal, recognized for our integrity, excellence, and
                    success in transforming students' lives through
                    international education opportunities. We envision a future
                    where every qualified Nepali student has access to
                    world-class education.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our
              commitment to student success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Meet Our Team
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              At Iroha Education Consultancy, we believe that a strong,
              passionate team is the foundation of every student's success. Get
              to know the people who are dedicated to guiding you on your
              journey to Japan!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Avatar className="w-44 h-44">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="text-xl font-semibold bg-blue-100 text-blue-600">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                      {member.role}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
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
              Visit Our Office in Kathmandu
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Located in the heart of Dillibazar, our office is easily
              accessible and equipped with modern facilities to provide you with
              the best consultation experience.
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <MapPin className="w-6 h-6" />
              <span>Dillibazar, Kathmandu, Nepal</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
