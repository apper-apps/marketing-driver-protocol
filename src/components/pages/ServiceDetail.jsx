import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"
import Badge from "@/components/atoms/Badge"
import ApperIcon from "@/components/ApperIcon"
import { serviceService } from "@/services/api/serviceService"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"

const ServiceDetail = () => {
  const { id } = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadService = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await serviceService.getById(id)
      setService(data)
    } catch (err) {
      setError(err.message || "Failed to load service details")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadService()
  }, [id])

  if (loading) return <Loading message="Loading service details..." />
  if (error) return <Error message={error} onRetry={loadService} />
  if (!service) return <Error message="Service not found" />

  const getBookingLink = () => {
    switch (service.category) {
      case "Speaking":
        return "/book-event"
      case "Consulting":
        return "/book-review"
      case "Training":
        return "/book-training"
      default:
        return "/contact"
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case "Speaking":
        return "accent"
      case "Training":
        return "primary"
      case "Consulting":
        return "secondary"
      case "Coaching":
        return "success"
      case "Implementation":
        return "warning"
      default:
        return "primary"
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-dark py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant={getCategoryColor(service.category)} className="mb-4">
                {service.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                {service.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {service.description}
              </p>
              <div className="text-3xl font-bold text-gradient mb-8">
                {service.price}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={getBookingLink()}>
                  <Button variant="accent" size="lg">
                    <ApperIcon name="Calendar" className="mr-2" size={20} />
                    Book This Service
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg">
                    <ApperIcon name="ArrowLeft" className="mr-2" size={20} />
                    Back to Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <ApperIcon name="Clock" className="mr-2" size={16} />
                    {service.duration}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <ApperIcon name="Package" className="mr-2" size={16} />
                    {service.deliverables}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <ApperIcon name="Tag" className="mr-2" size={16} />
                    {service.category}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <ApperIcon name="Award" className="mr-2" size={16} />
                    Professional
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6 font-display">
                    What's Included
                  </h2>
                  
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <ApperIcon name="Check" className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>

                <Card>
                  <h2 className="text-2xl font-bold text-white mb-6 font-display">
                    Service Benefits
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <ApperIcon name="Target" className="text-accent-500 mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Expert Guidance</h4>
                        <p className="text-gray-300 text-sm">
                          Benefit from years of experience and proven strategies
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ApperIcon name="Zap" className="text-accent-500 mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Fast Results</h4>
                        <p className="text-gray-300 text-sm">
                          See immediate improvements in your marketing performance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ApperIcon name="Users" className="text-accent-500 mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Personalized Approach</h4>
                        <p className="text-gray-300 text-sm">
                          Customized solutions tailored to your specific needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ApperIcon name="Award" className="text-accent-500 mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Proven Methods</h4>
                        <p className="text-gray-300 text-sm">
                          Strategies tested with hundreds of successful clients
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 font-display">
                    Service Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-semibold">{service.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{service.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Deliverables:</span>
                      <span className="text-white">{service.deliverables}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white">{service.category}</span>
                    </div>
                  </div>
                </Card>

                <Card className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 font-display">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    Book this service now or contact us to discuss your specific requirements 
                    and customize the approach to your needs.
                  </p>
                  <div className="space-y-3">
                    <Link to={getBookingLink()}>
                      <Button variant="accent" className="w-full">
                        <ApperIcon name="Calendar" className="mr-2" size={16} />
                        Book This Service
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full">
                        <ApperIcon name="MessageCircle" className="mr-2" size={16} />
                        Discuss Custom Options
                      </Button>
                    </Link>
                  </div>
                </Card>

                <Card>
                  <h3 className="text-xl font-bold text-white mb-4 font-display">
                    Other Services
                  </h3>
                  <div className="space-y-3">
                    <Link to="/services" className="block p-3 bg-surface-800 rounded-lg hover:bg-surface-700 transition-colors">
                      <div className="text-sm text-accent-500 mb-1">All Categories</div>
                      <div className="text-white font-medium">Browse All Services</div>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail