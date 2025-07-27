import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import Badge from "@/components/atoms/Badge"
import ServiceCard from "@/components/molecules/ServiceCard"
import ApperIcon from "@/components/ApperIcon"
import { useServices } from "@/hooks/useServices"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"

const Services = () => {
  const { services, loading, error, refetch } = useServices()

  if (loading) return <Loading message="Loading services..." />
  if (error) return <Error message={error} onRetry={refetch} />
  if (services.length === 0) return <Empty title="No services available" message="Check back soon for service updates" />

  const serviceCategories = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = []
    }
    acc[service.category].push(service)
    return acc
  }, {})

  const categoryInfo = {
    "Speaking": {
      title: "Speaking & Events",
      description: "Professional keynote presentations and workshops for your events",
      icon: "Mic"
    },
    "Training": {
      title: "Training Programs",
      description: "Comprehensive team training and educational programs",
      icon: "Users"
    },
    "Consulting": {
      title: "Consulting Services",
      description: "Expert guidance and strategic consulting for your marketing needs",
      icon: "Target"
    },
    "Coaching": {
      title: "Personal Coaching",
      description: "One-on-one guidance to accelerate your marketing success",
      icon: "MessageCircle"
    },
    "Implementation": {
      title: "Implementation Services",
      description: "Done-for-you marketing system setup and automation",
      icon: "Cog"
    }
  }

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
              <Badge variant="accent" className="mb-4">Professional Services</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                Digital Marketing
                <span className="block text-gradient">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                From speaking engagements to complete system implementation, 
                choose the service that best fits your needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="accent" size="xl">
                    <ApperIcon name="MessageCircle" className="mr-2" size={24} />
                    Discuss Your Needs
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
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Popular Service Requests
            </h2>
            <p className="text-xl text-gray-300">
              Quick access to our most requested services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/book-event" className="block">
                <div className="bg-gradient-card backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center hover:shadow-glow-hover hover:scale-[1.02] transition-all duration-300">
                  <ApperIcon name="Mic" className="text-accent-500 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3 font-display">
                    Book Event Speaking
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Professional keynote presentations for your events and shows
                  </p>
                  <Button variant="accent" className="w-full">
                    Book Speaking
                  </Button>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/book-review" className="block">
                <div className="bg-gradient-card backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center hover:shadow-glow-hover hover:scale-[1.02] transition-all duration-300">
                  <ApperIcon name="Star" className="text-accent-500 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3 font-display">
                    Tool Review & Training
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Expert reviews and training on your marketing tools
                  </p>
                  <Button variant="accent" className="w-full">
                    Book Review
                  </Button>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/book-training" className="block">
                <div className="bg-gradient-card backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center hover:shadow-glow-hover hover:scale-[1.02] transition-all duration-300">
                  <ApperIcon name="Users" className="text-accent-500 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3 font-display">
                    Team Training
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Complete training programs for your team (online or offline)
                  </p>
                  <Button variant="accent" className="w-full">
                    Book Training
                  </Button>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services by Category */}
      {Object.entries(categoryInfo).map(([category, info], categoryIndex) => {
        const categoryServices = serviceCategories[category] || []
        
        if (categoryServices.length === 0) return null

        return (
          <section 
            key={category} 
            className={categoryIndex % 2 === 0 ? "py-16 bg-gradient-dark" : "py-16 bg-background"}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <ApperIcon name={info.icon} className="text-accent-500 mr-3" size={32} />
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                    {info.title}
                  </h2>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {info.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service, index) => (
                  <motion.div
                    key={service.Id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Not Sure Which Service is Right for You?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss your needs and find the perfect solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg">
                <ApperIcon name="MessageCircle" className="mr-2" size={20} />
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/training">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
                <ApperIcon name="BookOpen" className="mr-2" size={20} />
                View Training Program
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services