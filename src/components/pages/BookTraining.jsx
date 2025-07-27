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

const BookTraining = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    industry: "",
    trainingMode: "",
    preferredDates: "",
    duration: "",
    currentLevel: "",
    specificGoals: "",
    challenges: "",
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
      
      toast.success("Team training request submitted successfully! I'll contact you within 24 hours to discuss your custom program.")
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        teamSize: "",
        industry: "",
        trainingMode: "",
        preferredDates: "",
        duration: "",
        currentLevel: "",
        specificGoals: "",
        challenges: "",
        message: ""
      })
    } catch (error) {
      toast.error("Failed to submit training request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const teamSizes = [
    "2-5 people",
    "6-10 people",
    "11-20 people",
    "21-50 people",
    "50+ people"
  ]

  const industries = [
    "Technology",
    "E-commerce",
    "Healthcare",
    "Finance",
    "Education",
    "Consulting",
    "Manufacturing",
    "Real Estate",
    "Non-profit",
    "Other"
  ]

  const trainingModes = [
    "Online (Virtual)",
    "Offline (In-person)",
    "Hybrid (Both online and offline)",
    "No preference"
  ]

  const durations = [
    "Half day (4 hours)",
    "Full day (8 hours)",
    "2 days",
    "3 days",
    "1 week",
    "Custom duration"
  ]

  const currentLevels = [
    "Beginner (Limited marketing experience)",
    "Intermediate (Some marketing knowledge)",
    "Advanced (Experienced marketers)",
    "Mixed levels"
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
              <Badge variant="accent" className="mb-4">Team Training Services</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                Team Training
                <span className="block text-gradient">Program</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete D Marketing System Lab training for your team. 
                Available online or offline, customized to your business needs and goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Options */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Training Delivery Options
            </h2>
            <p className="text-xl text-gray-300">
              Choose the format that works best for your team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Online Training",
                description: "Virtual sessions with interactive workshops and real-time collaboration",
                icon: "Monitor",
                features: ["Live virtual sessions", "Screen sharing & demos", "Breakout rooms", "Digital resources", "Recording available"]
              },
              {
                title: "Offline Training",
                description: "In-person training at your location with hands-on exercises",
                icon: "Users",
                features: ["On-site delivery", "Hands-on workshops", "Team collaboration", "Printed materials", "Direct interaction"]
              },
              {
                title: "Hybrid Training",
                description: "Combination of online and offline sessions for maximum flexibility",
                icon: "Zap",
                features: ["Best of both worlds", "Flexible scheduling", "Multiple touchpoints", "Varied learning styles", "Extended support"]
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <ApperIcon name={option.icon} className="text-accent-500 mb-4" size={40} />
                  <h3 className="text-xl font-semibold text-white mb-3 font-display">
                    {option.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.features.map((feature, i) => (
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

      {/* Training Program */}
      <section className="py-16 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Complete Training Program
            </h2>
            <p className="text-xl text-gray-300">
              The full D Marketing System Lab curriculum customized for your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stage: "1",
                title: "Plan it Right",
                description: "Define offers, understand audiences, and craft compelling messages",
                workshops: ["Define the Offer", "Audience Journey", "Craft Marketing Message"]
              },
              {
                stage: "2",
                title: "Build the System",
                description: "Create pages, email sequences, and automation infrastructure",
                workshops: ["Page Creation", "Message Sequences", "Tool Integration"]
              },
              {
                stage: "3",
                title: "Launch & Grow",
                description: "Drive traffic, analyze performance, and scale with AI",
                workshops: ["Traffic & Visitors", "Monitoring & Analysis", "AI Integration"]
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <Badge variant="accent" className="mb-4">
                    Stage {stage.stage}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-3 font-display">
                    {stage.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {stage.description}
                  </p>
                  <div className="space-y-2">
                    {stage.workshops.map((workshop, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <ApperIcon name="BookOpen" className="text-accent-500 mr-2" size={16} />
                        {workshop}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Book Team Training
            </h2>
            <p className="text-xl text-gray-300">
              Tell me about your team and training needs
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

              <div className="grid md:grid-cols-3 gap-6">
                <FormField label="Team Size" required>
                  <Select
                    value={formData.teamSize}
                    onChange={(e) => handleInputChange("teamSize", e.target.value)}
                    required
                  >
                    <option value="">Select team size</option>
                    {teamSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Select>
                </FormField>

                <FormField label="Industry" required>
                  <Select
                    value={formData.industry}
                    onChange={(e) => handleInputChange("industry", e.target.value)}
                    required
                  >
                    <option value="">Select industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </Select>
                </FormField>

                <FormField label="Training Mode" required>
                  <Select
                    value={formData.trainingMode}
                    onChange={(e) => handleInputChange("trainingMode", e.target.value)}
                    required
                  >
                    <option value="">Select mode</option>
                    {trainingModes.map((mode) => (
                      <option key={mode} value={mode}>
                        {mode}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Preferred Duration" required>
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

                <FormField label="Team's Current Level" required>
                  <Select
                    value={formData.currentLevel}
                    onChange={(e) => handleInputChange("currentLevel", e.target.value)}
                    required
                  >
                    <option value="">Select level</option>
                    {currentLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>

              <FormField label="Preferred Dates">
                <Input
                  type="text"
                  placeholder="e.g., First week of March, flexible timing, etc."
                  value={formData.preferredDates}
                  onChange={(e) => handleInputChange("preferredDates", e.target.value)}
                />
              </FormField>

              <FormField label="Specific Goals">
                <Textarea
                  placeholder="What specific outcomes do you want to achieve with this training? What does success look like for your team?"
                  value={formData.specificGoals}
                  onChange={(e) => handleInputChange("specificGoals", e.target.value)}
                  rows={3}
                />
              </FormField>

              <FormField label="Current Challenges">
                <Textarea
                  placeholder="What marketing challenges is your team currently facing? What areas need the most improvement?"
                  value={formData.challenges}
                  onChange={(e) => handleInputChange("challenges", e.target.value)}
                  rows={3}
                />
              </FormField>

              <FormField label="Additional Information">
                <Textarea
                  placeholder="Any other details about your team, budget considerations, or special requirements..."
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
                      Submit Training Request
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

      {/* What's Included */}
      <section className="py-16 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              What's Included
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive training package with ongoing support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Custom Curriculum",
                description: "Training tailored to your industry and specific needs",
                icon: "BookOpen"
              },
              {
                title: "Hands-on Workshops",
                description: "Interactive sessions with real-world exercises",
                icon: "Tool"
              },
              {
                title: "Resource Library",
                description: "Templates, guides, and reference materials",
                icon: "FileText"
              },
              {
                title: "90-Day Support",
                description: "Follow-up guidance for implementation success",
                icon: "MessageCircle"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <ApperIcon name={item.icon} className="text-accent-500 mx-auto mb-4" size={40} />
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

export default BookTraining