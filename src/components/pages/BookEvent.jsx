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

const BookEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    eventName: "",
    eventDate: "",
    attendees: "",
    duration: "",
    eventType: "",
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
      
      toast.success("Event booking request submitted successfully! I'll get back to you within 24 hours.")
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        eventName: "",
        eventDate: "",
        attendees: "",
        duration: "",
        eventType: "",
        message: ""
      })
    } catch (error) {
      toast.error("Failed to submit booking request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const eventTypes = [
    "Conference Keynote",
    "Workshop Session",
    "Panel Discussion",
    "Webinar Presentation",
    "Corporate Training",
    "Podcast Interview",
    "Other"
  ]

  const durations = [
    "30 minutes",
    "45 minutes",
    "60 minutes",
    "90 minutes",
    "2 hours",
    "Half day (4 hours)",
    "Full day (8 hours)"
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
              <Badge variant="accent" className="mb-4">Speaking Services</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                Book Me for Your
                <span className="block text-gradient">Event or Show</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Professional keynote presentations, workshops, and training sessions 
                on digital marketing, automation, and building successful marketing systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Popular Speaking Topics
            </h2>
            <p className="text-xl text-gray-300">
              Engaging presentations that provide real value to your audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Building Automated Marketing Systems",
                description: "How to create marketing that works 24/7",
                icon: "Cog"
              },
              {
                title: "The Future of Digital Marketing",
                description: "AI, automation, and emerging trends",
                icon: "Zap"
              },
              {
                title: "From Zero to Marketing Hero",
                description: "Complete system building from scratch",
                icon: "Rocket"
              },
              {
                title: "Marketing Tool Mastery",
                description: "Choosing and using the right tools",
                icon: "Tool"
              },
              {
                title: "Conversion Optimization Secrets",
                description: "Turn more visitors into customers",
                icon: "TrendingUp"
              },
              {
                title: "Content That Converts",
                description: "Creating compelling marketing messages",
                icon: "PenTool"
              }
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <ApperIcon name={topic.icon} className="text-accent-500 mx-auto mb-4" size={40} />
                  <h3 className="text-lg font-semibold text-white mb-3 font-display">
                    {topic.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {topic.description}
                  </p>
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
              Book Speaking Engagement
            </h2>
            <p className="text-xl text-gray-300">
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

              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Company/Organization" required>
                  <Input
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    required
                  />
                </FormField>

                <FormField label="Event Name" required>
                  <Input
                    type="text"
                    placeholder="Name of your event"
                    value={formData.eventName}
                    onChange={(e) => handleInputChange("eventName", e.target.value)}
                    required
                  />
                </FormField>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <FormField label="Event Date" required>
                  <Input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange("eventDate", e.target.value)}
                    required
                  />
                </FormField>

                <FormField label="Expected Attendees">
                  <Input
                    type="number"
                    placeholder="e.g., 100"
                    value={formData.attendees}
                    onChange={(e) => handleInputChange("attendees", e.target.value)}
                  />
                </FormField>

                <FormField label="Duration" required>
                  <Select
                    value={formData.duration}
                    onChange={(e) => handleInputChange("duration", e.target.value)}
                    required
                  >
                    <option value="">Select duration</option>
                    {durations.map((duration) => (
                      <option key={duration} value={duration}>
                        {duration}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>

              <FormField label="Event Type" required>
                <Select
                  value={formData.eventType}
                  onChange={(e) => handleInputChange("eventType", e.target.value)}
                  required
                >
                  <option value="">Select event type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
              </FormField>

              <FormField label="Additional Details">
                <Textarea
                  placeholder="Tell me more about your event, audience, desired topics, budget range, and any special requirements..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={5}
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
                      Submit Booking Request
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

      {/* What to Expect */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              What to Expect
            </h2>
            <p className="text-xl text-gray-300">
              Professional speaking service with comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We'll discuss your event goals, audience, and preferred topics"
              },
              {
                step: "2",
                title: "Custom Content",
                description: "Presentation tailored specifically for your audience and objectives"
              },
              {
                step: "3",
                title: "Professional Delivery",
                description: "Engaging presentation with practical insights and actionable takeaways"
              },
              {
                step: "4",
                title: "Follow-up Resources",
                description: "Digital materials and resources for attendees to continue learning"
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

export default BookEvent