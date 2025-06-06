
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      slug: "japan-student-visa-guide-2024",
      title: "Complete Guide to Japan Student Visa Application 2024",
      excerpt: "Everything you need to know about applying for a Japanese student visa, including required documents, timeline, and success tips.",
      category: "Visa Tips",
      readTime: "8 min read",
      publishDate: "2024-01-15",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=250&fit=crop",
      featured: true
    },
    {
      slug: "jlpt-preparation-strategies",
      title: "JLPT Preparation: Strategies for Success",
      excerpt: "Proven strategies and study methods to help you pass the Japanese Language Proficiency Test (JLPT) with confidence.",
      category: "Test Prep",
      readTime: "6 min read",
      publishDate: "2024-01-10",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      featured: false
    },
    {
      slug: "australian-university-scholarships",
      title: "Top Scholarship Opportunities for International Students in Australia",
      excerpt: "Discover the best scholarship programs available for international students planning to study in Australia.",
      category: "Scholarships",
      readTime: "10 min read",
      publishDate: "2024-01-05",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      featured: false
    },
    {
      slug: "living-costs-usa-students",
      title: "Understanding Living Costs as an International Student in the USA",
      excerpt: "A comprehensive breakdown of living expenses for international students in major US cities and money-saving tips.",
      category: "Student Life",
      readTime: "7 min read",
      publishDate: "2024-01-01",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=250&fit=crop",
      featured: false
    },
    {
      slug: "japanese-culture-guide-students",
      title: "Japanese Culture Guide for International Students",
      excerpt: "Essential cultural insights and etiquette tips to help you adapt and thrive as a student in Japan.",
      category: "Japanese Culture",
      readTime: "12 min read",
      publishDate: "2023-12-28",
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=250&fit=crop",
      featured: true
    },
    {
      slug: "ielts-speaking-tips",
      title: "IELTS Speaking Test: Tips and Common Mistakes to Avoid",
      excerpt: "Master the IELTS speaking test with these expert tips and learn how to avoid the most common mistakes.",
      category: "Test Prep",
      readTime: "5 min read",
      publishDate: "2023-12-25",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      featured: false
    }
  ];

  const categories = ["All", "Visa Tips", "Test Prep", "Japanese Culture", "Student Life", "Scholarships"];

  return (
    <>
      <Helmet>
        <title>Blog - Study Abroad Tips & Guides | Iroha Consultancy</title>
        <meta name="description" content="Expert study abroad advice, visa tips, test preparation guides, and cultural insights for students planning to study in Japan, Australia, and USA from Nepal." />
        <meta property="og:title" content="Study Abroad Blog - Tips, Guides & Insights | Iroha Consultancy" />
        <meta property="og:description" content="Expert advice and guides for studying abroad including visa tips, test preparation, and cultural insights for Japan, Australia, and USA." />
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
              Study Abroad Insights & Tips
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Articles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <Button asChild variant="ghost" className="p-0 h-auto">
                        <Link to={`/blog/${post.slug}`} className="flex items-center text-blue-600 hover:text-blue-700">
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

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              All Articles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-40 object-cover rounded-t-lg"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center space-x-3 text-xs text-gray-500 mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Button asChild variant="ghost" className="p-0 h-auto text-sm">
                        <Link to={`/blog/${post.slug}`} className="flex items-center text-blue-600 hover:text-blue-700">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
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
              Stay Updated with Study Abroad Tips
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get the latest updates on study abroad opportunities, visa changes, 
              scholarship deadlines, and expert tips delivered to your inbox.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Subscribe to Updates</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
