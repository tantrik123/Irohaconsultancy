import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogPosts = [
    {
      slug: "best-japanese-consultancy-kathmandu-2024",
      title: "Best Japanese Consultancy in Kathmandu 2024: Why Iroha Stands Out",
      excerpt: "Discover why Iroha Consultancy is recognized as the leading Japanese education consultancy in Kathmandu with proven success rates and comprehensive support.",
      category: "Consultancy Guide",
      readTime: "12 min read",
      publishDate: "2024-06-05",
      image: "/photos/consultancy.jpg",
      featured: true
    },
    {
      slug: "japan-student-visa-guide-2024",
      title: "Complete Guide to Japan Student Visa Application 2024",
      excerpt: "Everything you need to know about applying for a Japanese student visa, including required documents, timeline, and success tips from Nepal.",
      category: "Visa Guide",
      readTime: "15 min read",
      publishDate: "2024-06-01",
      image: "/photos/japppan.jpg",
      featured: true
    },
    {
      slug: "japan-skilled-worker-guide-2024",
      title: "Complete Guide to Japan Skilled Worker Visa Application 2024",
      excerpt: "An in-depth guide for applying to Japan's Skilled Worker and Highly Skilled Professional visa programs, including industries, eligibility, and tips for Nepalese applicants.",
      category: "Visa Guide",
      readTime: "15 min read",
      publishDate: "2024-06-10",
      image: "/photos/japanworker.jpg",
      featured: true
    },
    {
      slug: "why-choose-iroha-consultancy-japan",
      title: "Why Choose Iroha Consultancy for Your Japan Study Abroad Journey",
      excerpt: "Discover the unique advantages of choosing Iroha Consultancy for your Japanese education journey, from free language classes to 95% visa success rate.",
      category: "About Iroha",
      readTime: "10 min read",
      publishDate: "2024-05-28",
      image: "/photos/iroha.jpg",
      featured: false
    },
    {
      slug: "jlpt-preparation-guide-2024",
      title: "JLPT Preparation: Strategies for Success in 2024",
      excerpt: "A practical guide for cracking the Japanese Language Proficiency Test (JLPT) in 2024 — with levels N5 to N1 explained, preparation tips, recommended resources, and Nepal-specific advice.",
     category: "Language Learning",
      readTime: "12 min read",
      publishDate: "2024-06-10",
      image: "/photos/jlpt.jpg",
      featured: true,
    },
    {
      slug: "study-australia-vs-japan-2024",
      title: "Studying in Australia vs Japan: Complete Comparison for Nepalese Students",
      excerpt: "A side-by-side comparison of studying in Australia and Japan for Nepalese students — covering cost, visa, language, part-time jobs, PR options, and cultural differences.",
     category: "Study Abroad",
  readTime: "14 min read",
  publishDate: "2024-06-10",
      image: "/photos/australia.jpg",
      featured: true,
    },
    {
      slug: "usa-student-visa-tips-2024",
      title: "USA Student Visa Application Tips for Nepalese Students 2024",
      excerpt: "A complete guide for Nepalese students applying for a U.S. student visa in 2024 — including interview tips, document checklist, financial proof, and common mistakes to avoid.",
      category: "Visa Guide",
      readTime: "13 min read",
      publishDate: "2024-06-10",
      image: "/photos/usa.jpg",
      featured: false
    },
    {
      slug: "japanese-culture-guide-2024",
      title: "Japanese Culture Guide for Nepalese Students",
      excerpt: "A beginner-friendly guide to Japanese culture, customs, and etiquette tailored for Nepalese students moving to Japan — covering daily life, communication, food, festivals, and do's and don'ts.",
      category: "Student Life",
      readTime: "12 min read",
      publishDate: "2024-06-10",
      image: "/photos/jculture.jpg",
      featured: false
    },
   
    {
      slug: "japan-scholarships-nepalese-2024",
      title: "Top Scholarship Opportunities in Japan for Nepalese Students 2024",
      excerpt: "A detailed guide to the best scholarships available for Nepalese students in Japan — including MEXT, JASSO, university-specific aid, and private foundations.",
      category: "Scholarships",
      readTime: "14 min read",
      publishDate: "2024-06-10",
      image: "/photos/jstudent.jpg",
      featured: false
    },
    
  ];
  const categories = ["All", "Consultancy Guide", "Visa Guide", "Language Learning", "Study Abroad", "Scholarships", "Student Life", "Financial Guide"];

  return (
    <>
      <Helmet>
        <title>Blog - Study Abroad Tips & Guides | Iroha Consultancy</title>
        <meta name="description" content="Expert study abroad advice, visa tips, test preparation guides, and cultural insights for students planning to study in Japan, Australia, and USA from Nepal." />
        <meta property="og:title" content="Study Abroad Blog - Tips, Guides & Insights | Iroha Consultancy" />
        <meta property="og:description" content="Expert advice and guides for studying abroad including visa tips, test preparation, and cultural insights for Japan, Australia, and USA." />
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
              Study Abroad Insights & Tips
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Expert advice, practical tips, and comprehensive guides to help you navigate 
              your study abroad journey successfully. From visa applications to cultural adaptation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full transition-colors ${
                  selectedCategory === category 
                    ? 'bg-iroha-red hover:bg-iroha-red-dark text-white' 
                    : 'border-iroha-red text-iroha-red hover:bg-iroha-red/10'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory !== "All" && (
            <h2 className="text-2xl font-bold mb-8">
              Showing posts in: <span className="text-iroha-red">{selectedCategory}</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="ml-4 text-iroha-red hover:bg-iroha-red/10"
                onClick={() => setSelectedCategory("All")}
              >
                Clear filter
              </Button>
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(post => selectedCategory === "All" || post.category === selectedCategory)
              .map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group border-2 hover:border-iroha-red">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-iroha-red text-white text-sm px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-iroha-red transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <Button asChild variant="ghost" className="p-0 h-auto text-iroha-red hover:text-iroha-red-dark">
                        <Link to={`/blog/${post.slug}`} className="flex items-center">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Stay Updated with Study Abroad Tips
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Get the latest updates on study abroad opportunities, visa changes, 
              scholarship deadlines, and expert tips delivered to your inbox.
            </p>
            <Button asChild size="lg" className="bg-white text-iroha-red hover:bg-gray-100">
              <Link to="/contact">Subscribe to Updates</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
