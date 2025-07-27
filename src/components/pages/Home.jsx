import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"
import ApperIcon from "@/components/ApperIcon"
import CurriculumOverview from "@/components/organisms/CurriculumOverview"
import LeadCalculator from "@/components/organisms/LeadCalculator"

const Home = () => {
  const features = [
    {
      icon: "Target",
      title: "Strategic Planning",
      description: "Define your offer, understand your audience, and craft messages that convert"
    },
    {
      icon: "Cog",
      title: "System Building",
      description: "Create pages, email sequences, and automation that work together seamlessly"
    },
    {
      icon: "TrendingUp",
      title: "Growth & Optimization",
      description: "Launch campaigns, analyze results, and scale with AI-powered optimization"
    }
  ]

  const stats = [
    { number: "3", label: "Training Stages", icon: "Layers" },
    { number: "9", label: "Comprehensive Workshops", icon: "Users" },
    { number: "500+", label: "Students Trained", icon: "Award" },
    { number: "95%", label: "Success Rate", icon: "TrendingUp" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-dark py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">
                Build Your Complete
                <span className="block text-gradient">Digital Marketing System</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn the proven 3-stage system to create automated marketing that generates leads and sales — 
                even while you sleep. No complexity, just real tools and practical results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/training">
                  <Button variant="accent" size="xl">
                    <ApperIcon name="Rocket" className="mr-2" size={24} />
                    Start Learning Today
                  </Button>
                </Link>
                <Link to="/book-training">
                  <Button variant="outline" size="xl">
                    <ApperIcon name="Users" className="mr-2" size={24} />
                    Book Team Training
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-card backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                    <ApperIcon name={stat.icon} className="text-accent-500 mx-auto mb-3" size={32} />
                    <div className="text-3xl font-bold text-white mb-2 font-display">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Why Choose D Marketing System Lab?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology takes you from concept to automated marketing system in three strategic stages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card hover className="text-center h-full">
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <ApperIcon name={feature.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Calculator */}
      <LeadCalculator />

      {/* Curriculum Overview */}
      <CurriculumOverview />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join hundreds of entrepreneurs who have built automated marketing systems that work 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/training">
              <Button variant="accent" size="lg">
                <ApperIcon name="BookOpen" className="mr-2" size={20} />
                View Training Program
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
                <ApperIcon name="MessageCircle" className="mr-2" size={20} />
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home