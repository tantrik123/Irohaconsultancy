
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog post data - in a real app, this would come from a CMS or API
  const blogPosts: Record<string, any> = {
    "best-japanese-consultancy-kathmandu-2024": {
      title: "Best Japanese Consultancy in Kathmandu 2024: Why Iroha Stands Out",
      excerpt: "Discover why Iroha Consultancy is recognized as the leading Japanese education consultancy in Kathmandu with proven success rates and comprehensive support.",
      category: "Consultancy Guide",
      readTime: "12 min read",
      publishDate: "2024-06-05",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=400&fit=crop",
      content: `
        <p>Choosing the right consultancy for your Japanese education journey is crucial for your success. With numerous options available in Kathmandu, it's essential to understand what makes a consultancy truly exceptional. Iroha Consultancy has established itself as the premier choice for students aspiring to study in Japan, and here's why.</p>

        <h2>What Makes Iroha Consultancy the Best Choice?</h2>
        <p>Iroha Consultancy stands out in Kathmandu's competitive landscape of education consultancies through its comprehensive approach, proven track record, and unwavering commitment to student success. Since our establishment, we have maintained a success rate of over 95% in visa approvals, a testament to our expertise and dedication.</p>

        <h2>Comprehensive Services Under One Roof</h2>
        <p>Unlike many consultancies that offer limited services, Iroha provides end-to-end support for your Japanese education journey:</p>
        <ul>
          <li><strong>University and Language School Selection:</strong> We help you choose institutions that align with your academic goals and career aspirations</li>
          <li><strong>Document Preparation:</strong> Our experts ensure all your documents meet Japanese immigration requirements</li>
          <li><strong>Visa Processing:</strong> We handle the complex Certificate of Eligibility (COE) and visa application process</li>
          <li><strong>Free Japanese Language Classes:</strong> Learn Japanese from N5 to N1 levels with our certified instructors</li>
          <li><strong>Cultural Orientation:</strong> Prepare for life in Japan with our comprehensive cultural training</li>
          <li><strong>Post-arrival Support:</strong> Our assistance doesn't end when you reach Japan</li>
        </ul>

        <h2>Proven Track Record and Success Stories</h2>
        <p>Our success is measured by the achievements of our students. Over the years, we have successfully placed hundreds of Nepalese students in prestigious Japanese universities and language schools. Our alumni are now thriving in various fields across Japan, from engineering and technology to business and healthcare.</p>

        <h2>Expert Team with Japanese Experience</h2>
        <p>What sets Iroha apart is our team's deep understanding of the Japanese education system. Our counselors have either studied or worked in Japan, providing invaluable insights that generic consultancies cannot offer. This firsthand experience allows us to prepare students not just academically, but culturally as well.</p>

        <h2>Free Japanese Language Training</h2>
        <p>One of our unique offerings is free Japanese language classes for all our students. This significant advantage helps students:</p>
        <ul>
          <li>Meet language requirements for university admission</li>
          <li>Adapt more quickly to life in Japan</li>
          <li>Improve their chances of securing part-time employment</li>
          <li>Build confidence before departure</li>
        </ul>

        <h2>Transparent Process and No Hidden Costs</h2>
        <p>We believe in complete transparency with our students and their families. Our service fees are clearly outlined, with no hidden charges. We provide detailed timelines and keep students informed at every step of the application process.</p>

        <h2>Strong Network in Japan</h2>
        <p>Our extensive network of partner institutions in Japan ensures that we can offer the best opportunities to our students. These partnerships also mean better support for students once they arrive in Japan, including assistance with accommodation, part-time jobs, and academic guidance.</p>

        <h2>Personalized Counseling Approach</h2>
        <p>We understand that every student's situation is unique. Our counselors take time to understand individual goals, financial situations, and preferences to recommend the most suitable options. This personalized approach significantly increases the chances of success.</p>

        <h2>Recent Achievements and Recognition</h2>
        <p>In 2024, Iroha Consultancy has achieved several milestones:</p>
        <ul>
          <li>Highest visa approval rate among Kathmandu consultancies</li>
          <li>Successfully placed students in top Japanese universities including University of Tokyo, Waseda, and Keio</li>
          <li>Expanded our language training program with advanced JLPT preparation</li>
          <li>Established new partnerships with technical schools and vocational institutions</li>
        </ul>

        <h2>Student Testimonials</h2>
        <p>Our students' success stories speak volumes about our service quality. Many of our alumni credit Iroha's comprehensive support for their smooth transition to Japanese academic and social life. From helping with initial applications to providing ongoing support in Japan, we remain committed to our students' success.</p>

        <h2>How to Get Started</h2>
        <p>Beginning your Japanese education journey with Iroha is simple:</p>
        <ol>
          <li>Schedule a free consultation at our Dillibazar office</li>
          <li>Undergo eligibility assessment and goal setting</li>
          <li>Receive personalized recommendations for institutions and programs</li>
          <li>Begin document preparation and language training</li>
          <li>Apply for admission and visa processing</li>
          <li>Participate in pre-departure orientation</li>
          <li>Depart for Japan with confidence</li>
        </ol>

        <p>Choosing Iroha Consultancy means choosing experience, expertise, and a proven track record of success. Our comprehensive approach ensures that you're not just prepared academically, but also culturally and personally for your Japanese adventure.</p>
      `,
      faqs: [
        {
          q: "What makes Iroha Consultancy different from other Japanese consultancies in Kathmandu?",
          a: "Iroha Consultancy offers comprehensive services including free Japanese language classes, cultural orientation, and post-arrival support. Our team has firsthand experience in Japan and maintains a 95%+ visa approval rate."
        },
        {
          q: "Do you charge for initial consultation?",
          a: "No, our initial consultation is completely free. We believe in understanding your goals and providing honest advice before any commitment."
        },
        {
          q: "How long does the entire process take from application to departure?",
          a: "The typical timeline is 6-8 months, depending on the intake period and individual circumstances. This includes document preparation, application submission, COE processing, and visa approval."
        },
        {
          q: "What support do you provide after students reach Japan?",
          a: "We offer post-arrival support including assistance with accommodation, part-time job searches, academic guidance, and ongoing counseling throughout the study period."
        }
      ]
    },
    "japan-student-visa-guide-2024": {
      title: "Complete Guide to Japan Student Visa Application 2024",
      excerpt: "Everything you need to know about applying for a Japanese student visa, including required documents, timeline, and success tips from Nepal.",
      category: "Visa Guide",
      readTime: "15 min read",
      publishDate: "2024-06-01",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=400&fit=crop",
      content: `
        <p>Applying for a Japanese student visa can seem overwhelming, but with proper preparation and understanding of the process, you can significantly increase your chances of success. This comprehensive guide walks you through every step of the application process for Nepalese students.</p>

        <h2>Understanding the Certificate of Eligibility (COE)</h2>
        <p>The first crucial step in obtaining a Japanese student visa is securing a Certificate of Eligibility (COE). This document is applied for by your sponsoring educational institution in Japan on your behalf. The COE serves as preliminary permission for entry into Japan and is required before you can apply for the actual visa.</p>

        <p>The COE application process typically takes 1-3 months and involves your chosen institution submitting detailed documentation about your academic background, financial capacity, and study plans to the Japanese immigration authorities.</p>

        <h2>Required Documents for Student Visa Application</h2>
        <p>Once you receive your COE, you can apply for the student visa at the Japanese Embassy or Consulate in Nepal. The required documents include:</p>

        <h3>Primary Documents:</h3>
        <ul>
          <li>Valid passport with at least 6 months remaining validity</li>
          <li>Certificate of Eligibility (COE) original</li>
          <li>Completed visa application form (downloadable from embassy website)</li>
          <li>Recent passport-sized photograph (45mm x 45mm, white background)</li>
        </ul>

        <h3>Educational Documents:</h3>
        <ul>
          <li>All academic certificates and transcripts (originals and copies)</li>
          <li>Graduation certificates from high school and any higher education</li>
          <li>English translations of all educational documents</li>
          <li>Statement of purpose or study plan</li>
        </ul>

        <h3>Financial Documents:</h3>
        <ul>
          <li>Bank statements showing sufficient funds (minimum 1.5-2 million yen equivalent)</li>
          <li>Sponsor's income certificate if being sponsored</li>
          <li>Financial guarantee letter from sponsor</li>
          <li>Tax clearance certificate</li>
        </ul>

        <h2>Detailed Timeline and Processing</h2>
        <p>Understanding the timeline is crucial for planning your departure:</p>

        <h3>Phase 1: Preparation (2-4 weeks)</h3>
        <ul>
          <li>Document collection and translation</li>
          <li>Financial preparation and bank statements</li>
          <li>University application and acceptance</li>
        </ul>

        <h3>Phase 2: COE Application (1-3 months)</h3>
        <ul>
          <li>University submits COE application to immigration</li>
          <li>Processing by Japanese immigration authorities</li>
          <li>COE issuance and shipping to Nepal</li>
        </ul>

        <h3>Phase 3: Visa Application (4-7 working days)</h3>
        <ul>
          <li>Submission at Japanese Embassy/Consulate</li>
          <li>Document verification and processing</li>
          <li>Visa approval and passport collection</li>
        </ul>

        <h2>Financial Requirements in Detail</h2>
        <p>Demonstrating financial capacity is one of the most critical aspects of your visa application. Japanese immigration authorities want to ensure you can support yourself throughout your studies without becoming a burden on Japanese society.</p>

        <h3>Minimum Financial Requirements:</h3>
        <ul>
          <li>Language school students: 1.5-2 million yen for the first year</li>
          <li>University students: 2-3 million yen for the first year</li>
          <li>Graduate students: 2.5-3.5 million yen for the first year</li>
        </ul>

        <p>These amounts should be maintained in your bank account for at least 3-6 months before application, showing consistent financial stability.</p>

        <h2>Success Tips from Iroha Consultancy</h2>
        <p>Based on our years of experience and 95%+ success rate, here are insider tips for visa approval:</p>

        <h3>Document Preparation:</h3>
        <ul>
          <li>Ensure all documents are complete, accurate, and properly translated</li>
          <li>Maintain consistency in dates, names, and information across all documents</li>
          <li>Provide original documents wherever possible</li>
          <li>Keep multiple copies of all documents</li>
        </ul>

        <h3>Financial Documentation:</h3>
        <ul>
          <li>Show gradual accumulation of funds rather than large one-time deposits</li>
          <li>Provide clear source of income documentation</li>
          <li>Include multiple bank accounts if available</li>
          <li>Maintain minimum balance throughout the process</li>
        </ul>

        <h3>Statement of Purpose:</h3>
        <ul>
          <li>Clearly articulate your study goals and career plans</li>
          <li>Explain why you chose Japan and the specific institution</li>
          <li>Demonstrate genuine interest in Japanese culture and language</li>
          <li>Show how your studies will benefit your future in Nepal</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>
        <p>Many applications are rejected due to preventable errors. Here are the most common mistakes:</p>

        <ul>
          <li><strong>Incomplete documentation:</strong> Missing even one required document can lead to rejection</li>
          <li><strong>Inconsistent information:</strong> Discrepancies between documents raise red flags</li>
          <li><strong>Insufficient financial proof:</strong> Not meeting minimum financial requirements</li>
          <li><strong>Poor quality photographs:</strong> Photos not meeting specified requirements</li>
          <li><strong>Vague study plans:</strong> Unclear or unconvincing statements of purpose</li>
          <li><strong>Late application:</strong> Not allowing sufficient time for processing</li>
        </ul>

        <h2>Special Considerations for Nepalese Students</h2>
        <p>As a Nepalese applicant, there are specific considerations:</p>

        <ul>
          <li>All documents must be authenticated by the Ministry of Foreign Affairs, Nepal</li>
          <li>English translations must be certified</li>
          <li>Financial documents should show funds in major currencies (USD, EUR, JPY)</li>
          <li>Educational gap explanations may be required</li>
        </ul>

        <h2>After Visa Approval</h2>
        <p>Once your visa is approved:</p>

        <ul>
          <li>Book your flight and inform your institution</li>
          <li>Prepare for departure with necessary documents</li>
          <li>Attend pre-departure orientation</li>
          <li>Arrange temporary accommodation in Japan</li>
          <li>Prepare for residence card application upon arrival</li>
        </ul>

        <p>Remember, working with experienced consultants like Iroha Consultancy can significantly improve your chances of success. Our team's expertise in document preparation, application processes, and embassy requirements has helped hundreds of students successfully obtain their Japanese student visas.</p>
      `,
      faqs: [
        {
          q: "How long does the Japanese student visa application process take?",
          a: "The complete process typically takes 3-6 months: 1-3 months for COE processing and 4-7 working days for visa application after COE approval."
        },
        {
          q: "Can I apply for a Japanese student visa without a consultancy?",
          a: "Yes, but working with experienced consultants significantly increases success rates. Iroha Consultancy has a 95%+ approval rate due to expert guidance and document preparation."
        },
        {
          q: "What happens if my visa application is rejected?",
          a: "Rejections can be appealed or reapplied with corrected documentation. Our team analyzes rejection reasons and helps with successful reapplication."
        },
        {
          q: "How much money do I need to show for a Japanese student visa?",
          a: "Minimum 1.5-3.5 million yen depending on your course level. Language school students need 1.5-2 million yen, while university students need 2-3 million yen for the first year."
        }
      ]
    },
    "why-choose-iroha-consultancy-japan": {
      title: "Why Choose Iroha Consultancy for Your Japan Study Abroad Journey",
      excerpt: "Discover the unique advantages of choosing Iroha Consultancy for your Japanese education journey, from free language classes to 95% visa success rate.",
      category: "About Iroha",
      readTime: "10 min read",
      publishDate: "2024-05-28",
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=400&fit=crop",
      content: `
        <p>Embarking on a study abroad journey to Japan is a life-changing decision that requires careful planning and expert guidance. With numerous consultancies offering similar services, choosing the right partner for your Japanese education journey is crucial. Iroha Consultancy has established itself as the leading choice for Nepalese students, and here's why thousands have trusted us with their dreams.</p>

        <h2>Proven Track Record of Success</h2>
        <p>Our numbers speak for themselves. With a visa approval rate exceeding 95%, Iroha Consultancy has consistently maintained the highest success rate among Kathmandu-based consultancies. This remarkable achievement is the result of our meticulous approach to document preparation, thorough understanding of Japanese immigration requirements, and personalized guidance for each student.</p>

        <p>Since our establishment, we have successfully placed over 2,000 students in various Japanese institutions, from prestigious universities like University of Tokyo and Waseda to specialized language schools and vocational institutions across Japan.</p>

        <h2>Comprehensive Free Japanese Language Training</h2>
        <p>What truly sets Iroha apart is our commitment to providing free Japanese language education to all our students. This invaluable service includes:</p>

        <h3>Structured Language Curriculum:</h3>
        <ul>
          <li>Beginner to Advanced levels (N5 to N1)</li>
          <li>Grammar, vocabulary, and conversation practice</li>
          <li>Reading and writing skills (Hiragana, Katakana, Kanji)</li>
          <li>Cultural context and practical usage</li>
        </ul>

        <h3>JLPT Preparation:</h3>
        <ul>
          <li>Specialized coaching for Japanese Language Proficiency Test</li>
          <li>Mock tests and practice sessions</li>
          <li>Test-taking strategies and time management</li>
          <li>Regular assessment and progress tracking</li>
        </ul>

        <p>This language preparation gives our students a significant advantage when they arrive in Japan, helping them adapt more quickly to academic and social environments.</p>

        <h2>Expert Team with Japanese Experience</h2>
        <p>Our counseling team comprises professionals who have either studied, worked, or lived in Japan. This firsthand experience provides invaluable insights that generic consultancies cannot offer:</p>

        <ul>
          <li><strong>Cultural Understanding:</strong> Deep knowledge of Japanese customs, etiquette, and social norms</li>
          <li><strong>Academic System Expertise:</strong> Detailed understanding of Japanese education structure and requirements</li>
          <li><strong>Practical Life Skills:</strong> Real-world advice on living, working, and studying in Japan</li>
          <li><strong>Industry Connections:</strong> Strong network with educational institutions and professionals in Japan</li>
        </ul>

        <h2>End-to-End Support Services</h2>
        <p>Iroha Consultancy provides comprehensive support throughout your entire journey:</p>

        <h3>Pre-Application Phase:</h3>
        <ul>
          <li>Free initial counseling and eligibility assessment</li>
          <li>University and course selection guidance</li>
          <li>Career path planning and goal setting</li>
          <li>Financial planning and scholarship guidance</li>
        </ul>

        <h3>Application Phase:</h3>
        <ul>
          <li>Complete document preparation and verification</li>
          <li>Application submission and follow-up</li>
          <li>COE processing and visa application support</li>
          <li>Interview preparation and coaching</li>
        </ul>

        <h3>Pre-Departure Phase:</h3>
        <ul>
          <li>Comprehensive orientation sessions</li>
          <li>Cultural adaptation training</li>
          <li>Practical life skills workshops</li>
          <li>Travel and accommodation arrangements</li>
        </ul>

        <h3>Post-Arrival Support:</h3>
        <ul>
          <li>Airport pickup and initial settlement assistance</li>
          <li>Residence card and bank account opening support</li>
          <li>Part-time job search guidance</li>
          <li>Ongoing academic and personal counseling</li>
        </ul>

        <h2>Personalized Counseling Approach</h2>
        <p>We understand that every student's situation, goals, and circumstances are unique. Our personalized counseling approach ensures that each student receives tailored advice and support:</p>

        <ul>
          <li><strong>Individual Assessment:</strong> Thorough evaluation of academic background, interests, and career goals</li>
          <li><strong>Customized Recommendations:</strong> Institution and program suggestions based on individual profiles</li>
          <li><strong>Flexible Planning:</strong> Adaptable timelines and strategies to suit different circumstances</li>
          <li><strong>Ongoing Support:</strong> Continuous guidance and adjustments throughout the process</li>
        </ul>

        <h2>Strong Network and Partnerships</h2>
        <p>Our extensive network in Japan provides significant advantages to our students:</p>

        <h3>Educational Institution Partnerships:</h3>
        <ul>
          <li>Direct relationships with top universities and language schools</li>
          <li>Preferential admission processes for qualified students</li>
          <li>Access to exclusive scholarship opportunities</li>
          <li>Regular updates on program changes and new offerings</li>
        </ul>

        <h3>Industry Connections:</h3>
        <ul>
          <li>Relationships with Japanese companies for internship opportunities</li>
          <li>Alumni network for mentorship and career guidance</li>
          <li>Professional contacts for job placement assistance</li>
          <li>Cultural organizations for community integration</li>
        </ul>

        <h2>Transparent Process and Honest Communication</h2>
        <p>Transparency is at the core of our service philosophy:</p>

        <ul>
          <li><strong>Clear Fee Structure:</strong> No hidden costs or surprise charges</li>
          <li><strong>Realistic Expectations:</strong> Honest assessment of chances and realistic timelines</li>
          <li><strong>Regular Updates:</strong> Consistent communication about application progress</li>
          <li><strong>Open Communication:</strong> Accessible counselors for questions and concerns</li>
        </ul>

        <h2>Success Stories and Alumni Network</h2>
        <p>Our success is measured by the achievements of our students. Iroha alumni are now:</p>

        <ul>
          <li>Studying at prestigious universities like University of Tokyo, Kyoto University, and Waseda</li>
          <li>Working at leading Japanese companies in technology, engineering, and business</li>
          <li>Contributing to research and innovation in various fields</li>
          <li>Building successful careers and lives in Japan</li>
        </ul>

        <p>Many of our alumni actively participate in our mentorship program, providing guidance and support to new students.</p>

        <h2>Additional Value-Added Services</h2>
        <p>Beyond standard consultancy services, Iroha offers:</p>

        <ul>
          <li><strong>Document Translation:</strong> Certified translation services for official documents</li>
          <li><strong>Scholarship Applications:</strong> Assistance with MEXT and other scholarship programs</li>
          <li><strong>Cultural Workshops:</strong> Regular sessions on Japanese culture, etiquette, and customs</li>
          <li><strong>Alumni Events:</strong> Networking opportunities with successful graduates</li>
          <li><strong>Family Support:</strong> Guidance and updates for families throughout the process</li>
        </ul>

        <h2>Commitment to Excellence</h2>
        <p>Our commitment to excellence is demonstrated through:</p>

        <ul>
          <li>Continuous training and development of our counseling team</li>
          <li>Regular updates on Japanese immigration and education policies</li>
          <li>Investment in modern facilities and technology</li>
          <li>Feedback-driven service improvements</li>
          <li>Quality assurance processes at every step</li>
        </ul>

        <p>Choosing Iroha Consultancy means choosing a partner who is genuinely invested in your success. Our comprehensive approach, proven track record, and unwavering commitment to student success make us the preferred choice for Japanese education in Nepal.</p>

        <p>Your journey to Japan begins with a single step - choosing the right consultancy. Let Iroha Consultancy be your trusted guide to achieving your dreams of studying in Japan.</p>
      `,
      faqs: [
        {
          q: "What makes Iroha Consultancy different from other study abroad consultancies?",
          a: "Iroha offers free Japanese language classes, has a 95%+ visa approval rate, provides post-arrival support in Japan, and our team has firsthand experience studying/working in Japan."
        },
        {
          q: "How much do your services cost?",
          a: "We offer transparent pricing with no hidden fees. Our initial consultation is free, and service packages vary based on your chosen destination and level of support needed."
        },
        {
          q: "Do you provide support after students reach Japan?",
          a: "Yes, we provide comprehensive post-arrival support including airport pickup, residence card assistance, bank account opening, part-time job guidance, and ongoing counseling."
        },
        {
          q: "What is your visa approval success rate?",
          a: "We maintain a 95%+ visa approval rate, which is among the highest in Nepal. This is achieved through meticulous document preparation and expert guidance throughout the process."
        }
      ]
    }
  };

  const post = blogPosts[slug || ""];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Iroha Consultancy Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:section" content={post.category} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-iroha-red text-white text-sm px-3 py-1 rounded-full mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-200">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-4 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button asChild variant="ghost" className="hover:text-iroha-red">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="border-iroha-red text-iroha-red hover:bg-iroha-red hover:text-white">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-iroha-red prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* FAQ Section */}
      {post.faqs && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

            <div className="space-y-6">
              {post.faqs.map((faq: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-iroha-red transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Author Info */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 hover:border-iroha-red transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 gradient-iroha rounded-full flex items-center justify-center text-white font-bold text-xl">
                  I
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Iroha Consultancy Team</h3>
                  <p className="text-gray-600">
                    Expert study abroad consultants with years of experience helping students 
                    achieve their international education goals in Japan, Australia, and USA.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our experienced counselors and take the first step 
              towards your international education goals.
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

export default BlogPost;
