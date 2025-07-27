import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"
import Badge from "@/components/atoms/Badge"
import FormField from "@/components/molecules/FormField"
import Input from "@/components/atoms/Input"
import Textarea from "@/components/atoms/Textarea"
import Select from "@/components/atoms/Select"
import ApperIcon from "@/components/ApperIcon"

const BookReview = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    toolName: "",
    toolCategory: "",
    reviewType: "",
    currentUsage: "",
    specificAreas: "",
    timeline: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast.success("Tool review request submitted successfully! I'll contact you within 24 hours to discuss the details.")
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        toolName: "",
        toolCategory: "",
        reviewType: "",
        currentUsage: "",
        specificAreas: "",
        timeline: "",
        message: ""
      })
    } catch (error) {
      toast.error("Failed to submit review request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toolCategories = [
    "Email Marketing",
    "Marketing Automation",
    "CRM Systems",
    "Analytics Tools",
    "Social Media Management",
    "Content Management",
    "Landing Page Builders",
    "E-commerce Platforms",
    "Lead Generation Tools",
    "Other"
  ]

  const reviewTypes = [
    "Complete Tool Review",
    "Feature-Specific Analysis",
    "Comparison with Alternatives",
    "Implementation Training",
    "Optimization Review",
    "Integration Assessment"
  ]

  const timelines = [
    "Within 1 week",
    "Within 2 weeks",
    "Within 1 month",
    "Flexible timing"
  ]

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
              <Badge variant="accent" className="mb-4">Tool Review Services</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                Tool Review &
                <span className="block text-gradient">Training Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get expert analysis and training on your marketing tools. 
                Optimize your current setup or evaluate new solutions with professional guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Review & Training Services
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive analysis and training for your marketing tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Tool Review",
                description: "In-depth analysis of your tool's performance, features, and optimization opportunities",
                icon: "Search",
                features: ["Feature assessment", "Performance analysis", "Optimization recommendations", "Best practices guide"]
              },
              {
                title: "Implementation Training",
                description: "Hands-on training to help your team maximize tool effectiveness",
                icon: "Users",
                features: ["Team training sessions", "Custom workflows", "Implementation guide", "Ongoing support"]
              },
              {
                title: "Tool Comparison",
                description: "Compare your current tools with alternatives to make informed decisions",
                icon: "BarChart3",
                features: ["Side-by-side analysis", "Cost-benefit comparison", "Migration planning", "Recommendation report"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <ApperIcon name={service.icon} className="text-accent-500 mb-4" size={40} />
                  <h3 className="text-xl font-semibold text-white mb-3 font-display">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <ApperIcon name="Check" className="text-green-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Request Tool Review & Training
            </h2>
            <p className="text-xl text-gray-300">
              Tell me about your tool and what you'd like to achieve
            </p>
          </div>

          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Your Name" required>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </FormField>

                <FormField label="Email Address" required>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </FormField>
              </div>

              <FormField label="Company/Organization" required>
                <Input
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  required
                />
              </FormField>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Tool Name" required>
                  <Input
                    type="text"
                    placeholder="e.g., HubSpot, Mailchimp, etc."
                    value={formData.toolName}
                    onChange={(e) => handleInputChange("toolName", e.target.value)}
                    required
                  />
                </FormField>

                <FormField label="Tool Category" required>
                  <Select
                    value={formData.toolCategory}
                    onChange={(e) => handleInputChange("toolCategory", e.target.value)}
                    required
                  >
                    <option value="">Select category</option>
                    {toolCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Review Type" required>
                  <Select
                    value={formData.reviewType}
                    onChange={(e) => handleInputChange("reviewType", e.target.value)}
                    required
                  >
                    <option value="">Select review type</option>
                    {reviewTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </Select>
                </FormField>

                <FormField label="Preferred Timeline">
                  <Select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange("timeline", e.target.value)}
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>

              <FormField label="Current Usage">
                <Textarea
                  placeholder="How are you currently using this tool? What's working well and what challenges are you facing?"
                  value={formData.currentUsage}
                  onChange={(e) => handleInputChange("currentUsage", e.target.value)}
                  rows={3}
                />
              </FormField>

              <FormField label="Specific Areas of Interest">
                <Textarea
                  placeholder="Are there specific features, integrations, or aspects of the tool you'd like me to focus on?"
                  value={formData.specificAreas}
                  onChange={(e) => handleInputChange("specificAreas", e.target.value)}
                  rows={3}
                />
              </FormField>

              <FormField label="Additional Details">
                <Textarea
                  placeholder="Any other information that would help me provide the best review and training for your needs..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                />
              </FormField>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <ApperIcon name="Loader2" className="mr-2 animate-spin" size={20} />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <ApperIcon name="Send" className="mr-2" size={20} />
                      Submit Review Request
                    </>
                  )}
                </Button>
                <Link to="/services">
                  <Button variant="outline" size="lg">
                    <ApperIcon name="ArrowLeft" className="mr-2" size={20} />
                    Back to Services
                  </Button>
                </Link>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Review Process
            </h2>
            <p className="text-xl text-gray-300">
              How the tool review and training process works
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery Call",
                description: "Understand your current setup, challenges, and goals"
              },
              {
                step: "2",
                title: "Tool Analysis",
                description: "Comprehensive review of features, performance, and optimization opportunities"
              },
              {
                step: "3",
                title: "Report & Training",
                description: "Detailed findings report with custom training session"
              },
              {
                step: "4",
                title: "Implementation Support",
                description: "Ongoing guidance to implement recommendations effectively"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="bg-gradient-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookReview