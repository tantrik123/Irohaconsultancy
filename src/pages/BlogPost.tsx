
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
    "japan-student-visa-guide-2024": {
      title: "Complete Guide to Japan Student Visa Application 2024",
      excerpt: "Everything you need to know about applying for a Japanese student visa, including required documents, timeline, and success tips.",
      category: "Visa Tips",
      readTime: "8 min read",
      publishDate: "2024-01-15",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=400&fit=crop",
      content: `
        <p>Applying for a Japanese student visa can seem overwhelming, but with proper preparation and understanding of the process, you can significantly increase your chances of success. This comprehensive guide walks you through every step of the application process.</p>

        <h2>Understanding the Certificate of Eligibility (COE)</h2>
        <p>The first crucial step in obtaining a Japanese student visa is securing a Certificate of Eligibility (COE). This document is applied for by your sponsoring educational institution in Japan on your behalf. The COE serves as preliminary permission for entry into Japan and is required before you can apply for the actual visa.</p>

        <h2>Required Documents</h2>
        <p>The documentation required for a Japanese student visa application includes:</p>
        <ul>
          <li>Valid passport with at least 6 months remaining validity</li>
          <li>Certificate of Eligibility (COE) original</li>
          <li>Completed visa application form</li>
          <li>Recent passport-sized photograph</li>
          <li>Educational certificates and transcripts</li>
          <li>Financial proof demonstrating ability to support studies</li>
          <li>Statement of purpose or study plan</li>
        </ul>

        <h2>Timeline and Processing</h2>
        <p>The entire process typically takes 3-6 months:</p>
        <ul>
          <li>COE application: 1-3 months</li>
          <li>Visa application: 4-7 working days</li>
          <li>Additional time for document preparation: 2-4 weeks</li>
        </ul>

        <h2>Success Tips</h2>
        <p>To maximize your chances of approval:</p>
        <ul>
          <li>Ensure all documents are complete and accurate</li>
          <li>Provide clear financial documentation</li>
          <li>Write a compelling statement of purpose</li>
          <li>Maintain consistency across all documents</li>
          <li>Apply well in advance of your intended start date</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>
        <p>Many applications are rejected due to preventable errors. Avoid these common mistakes:</p>
        <ul>
          <li>Incomplete or inconsistent documentation</li>
          <li>Insufficient financial proof</li>
          <li>Poor quality photographs</li>
          <li>Vague or unconvincing study plans</li>
          <li>Missing supporting documents</li>
        </ul>

        <p>Remember, working with experienced consultants like Iroha Consultancy can significantly improve your chances of success. Our team has helped hundreds of students successfully obtain their Japanese student visas.</p>
      `
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
              <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-4 inline-block">
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
            <Button asChild variant="ghost">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <Button variant="outline" size="sm">
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
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Author Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  I
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Iroha Consultancy Team</h3>
                  <p className="text-gray-600">
                    Expert study abroad consultants with years of experience helping students 
                    achieve their international education goals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our experienced counselors and take the first step 
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

export default BlogPost;
