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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    inquiryType: "",
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
      
      toast.success("Message sent successfully! I'll get back to you within 24 hours.")
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        inquiryType: "",
        message: ""
      })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inquiryTypes = [
    "General Inquiry",
    "Training Program",
    "Speaking Engagement",
    "Tool Review",
    "Consulting Services",
    "Partnership Opportunity",
    "Media Interview",
    "Other"
  ]

  const contactMethods = [
    {
      icon: "Mail",
      title: "Email",
      value: "info@dmarketinglab.com",
      description: "For general inquiries and support"
    },
    {
      icon: "Phone",
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Monday to Friday, 9 AM to 6 PM EST"
    },
    {
      icon: "MapPin",
      title: "Location",
      value: "Digital City, DC 12345",
      description: "Available for on-site training"
    },
    {
      icon: "Clock",
      title: "Response Time",
      value: "Within 24 hours",
      description: "Typically much faster"
    }
  ]

  const quickActions = [
    {
      title: "Book Team Training",
      description: "Schedule training for your team",
      link: "/book-training",
      icon: "Users"
    },
    {
      title: "Book Speaking Event",
      description: "Request speaking services",
      link: "/book-event",
      icon: "Mic"
    },
    {
      title: "Request Tool Review",
      description: "Get expert tool analysis",
      link: "/book-review",
      icon: "Star"
    }
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
              <Badge variant="accent" className="mb-4">Get In Touch</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                Let's Build Your
                <span className="block text-gradient">Marketing Success</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Have questions about training programs, need custom consulting, or want to discuss 
                speaking opportunities? I'm here to help you build the marketing system that works.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Quick Actions
            </h2>
            <p className="text-xl text-gray-300">
              Skip the form and get straight to what you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={action.link}>
                  <Card hover className="text-center h-full">
                    <ApperIcon name={action.icon} className="text-accent-500 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-white mb-3 font-display">
                      {action.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {action.description}
                    </p>
                    <Button variant="accent" className="w-full">
                      Get Started
                      <ApperIcon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 font-display">
                  Send Me a Message
                </h2>
                <p className="text-gray-300">
                  Fill out the form below and I'll get back to you within 24 hours
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

                  <FormField label="Company/Organization">
                    <Input
                      type="text"
                      placeholder="Your company name (optional)"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                    />
                  </FormField>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField label="Subject" required>
                      <Input
                        type="text"
                        placeholder="Brief subject line"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </FormField>

                    <FormField label="Inquiry Type" required>
                      <Select
                        value={formData.inquiryType}
                        onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                        required
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </Select>
                    </FormField>
                  </div>

                  <FormField label="Message" required>
                    <Textarea
                      placeholder="Tell me about your needs, questions, or how I can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={6}
                      required
                    />
                  </FormField>

                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <ApperIcon name="Loader2" className="mr-2 animate-spin" size={20} />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <ApperIcon name="Send" className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 font-display">
                  Contact Information
                </h2>
                <p className="text-gray-300">
                  Multiple ways to reach me for different types of inquiries
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index}>
                    <div className="flex items-start">
                      <div className="bg-gradient-accent rounded-full p-3 mr-4">
                        <ApperIcon name={method.icon} className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1 font-display">
                          {method.title}
                        </h3>
                        <p className="text-accent-400 font-medium mb-1">
                          {method.value}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4 font-display">
                  Follow Me
                </h3>
                <p className="text-gray-300 mb-4">
                  Stay updated with the latest marketing insights and tips
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-surface-800 p-3 rounded-lg hover:bg-primary-600 transition-colors">
                    <ApperIcon name="Facebook" className="text-white" size={24} />
                  </a>
                  <a href="#" className="bg-surface-800 p-3 rounded-lg hover:bg-primary-600 transition-colors">
                    <ApperIcon name="Twitter" className="text-white" size={24} />
                  </a>
                  <a href="#" className="bg-surface-800 p-3 rounded-lg hover:bg-primary-600 transition-colors">
                    <ApperIcon name="Linkedin" className="text-white" size={24} />
                  </a>
                  <a href="#" className="bg-surface-800 p-3 rounded-lg hover:bg-primary-600 transition-colors">
                    <ApperIcon name="Youtube" className="text-white" size={24} />
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you respond to training requests?",
                answer: "I typically respond to all training inquiries within 24 hours. For urgent requests, I often respond much faster."
              },
              {
                question: "Do you offer both online and offline training?",
                answer: "Yes! I provide flexible training options including virtual sessions, on-site training, and hybrid approaches to fit your team's needs."
              },
              {
                question: "Can you customize the training for our specific industry?",
                answer: "Absolutely. All training programs are customized to your industry, company size, and specific marketing challenges."
              },
              {
                question: "What's included in your speaking engagements?",
                answer: "Speaking engagements include a customized presentation, Q&A session, digital resources for attendees, and a pre-event consultation call."
              },
              {
                question: "Do you provide ongoing support after training?",
                answer: "Yes, all training programs include 90 days of follow-up support to help ensure successful implementation of what you've learned."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-lg font-semibold text-white mb-3 font-display">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
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

export default Contact