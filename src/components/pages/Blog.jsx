import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"
import Badge from "@/components/atoms/Badge"
import SearchBar from "@/components/molecules/SearchBar"
import ApperIcon from "@/components/ApperIcon"
import Empty from "@/components/ui/Empty"

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Mock blog data - in a real app, this would come from a service
  const blogPosts = [
    {
      id: 1,
      title: "Building Your First Automated Email Sequence",
      excerpt: "Learn how to create email sequences that nurture leads and drive conversions automatically.",
      category: "Email Marketing",
      readTime: "8 min read",
      publishDate: "March 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "The Complete Guide to Landing Page Optimization",
      excerpt: "Discover the essential elements that turn visitors into customers with proven optimization techniques.",
      category: "Conversion",
      readTime: "12 min read",
      publishDate: "March 10, 2024",
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "AI Tools That Will Transform Your Marketing in 2024",
      excerpt: "Explore the latest AI marketing tools and how to integrate them into your marketing system.",
      category: "AI & Automation",
      readTime: "10 min read",
      publishDate: "March 5, 2024",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Understanding Your Customer Journey",
      excerpt: "Map out every touchpoint to create more effective marketing campaigns that resonate.",
      category: "Strategy",
      readTime: "6 min read",
      publishDate: "February 28, 2024",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Marketing Analytics: What Metrics Actually Matter",
      excerpt: "Cut through the noise and focus on the metrics that drive real business growth.",
      category: "Analytics",
      readTime: "9 min read",
      publishDate: "February 20, 2024",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Content Marketing Strategies That Actually Work",
      excerpt: "Create content that engages your audience and drives meaningful business results.",
      category: "Content Marketing",
      readTime: "11 min read",
      publishDate: "February 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop"
    }
  ]

  const categories = ["All", "Email Marketing", "Conversion", "AI & Automation", "Strategy", "Analytics", "Content Marketing"]

  const getCategoryColor = (category) => {
    const colors = {
      "Email Marketing": "primary",
      "Conversion": "accent",
      "AI & Automation": "secondary",
      "Strategy": "success",
      "Analytics": "warning",
      "Content Marketing": "primary"
    }
    return colors[category] || "primary"
  }

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-dark py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="accent" className="mb-4">Knowledge Hub</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                Marketing
                <span className="block text-gradient">Insights & Tips</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Practical advice, strategies, and insights to help you build better marketing systems. 
                Learn from real experiences and proven techniques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            <SearchBar
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full lg:w-96"
            />
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === "All" && !searchTerm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 font-display">Featured Article</h2>
                <p className="text-gray-400">Latest insights from the D Marketing Lab</p>
              </div>
              
              <Card hover className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant={getCategoryColor(featuredPost.category)}>
                        {featuredPost.category}
                      </Badge>
                      <span className="text-sm text-gray-400">{featuredPost.readTime}</span>
                      <span className="text-sm text-gray-400">{featuredPost.publishDate}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Button variant="accent">
                      <ApperIcon name="ArrowRight" className="mr-2" size={16} />
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover className="h-full flex flex-col">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={getCategoryColor(post.category)} className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-400">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3 font-display line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{post.publishDate}</span>
                        <Button variant="ghost" size="sm">
                          <ApperIcon name="ArrowRight" size={16} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Empty
              title="No articles found"
              message="Try adjusting your search terms or category filter"
              icon="Search"
            />
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Stay Updated
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get the latest marketing insights and tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <Button variant="accent" size="lg">
              <ApperIcon name="Mail" className="mr-2" size={20} />
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Ready to Build Your Marketing System?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stop reading about marketing and start building your automated system today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/training">
              <Button variant="accent" size="lg">
                <ApperIcon name="BookOpen" className="mr-2" size={20} />
                View Training Program
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                <ApperIcon name="MessageCircle" className="mr-2" size={20} />
                Get Personal Guidance
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog