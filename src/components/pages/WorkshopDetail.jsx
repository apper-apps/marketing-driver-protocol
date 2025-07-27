import React from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"
import Badge from "@/components/atoms/Badge"
import ApperIcon from "@/components/ApperIcon"
import { workshopService } from "@/services/api/workshopService"
import { useState, useEffect } from "react"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"

const WorkshopDetail = () => {
  const { id } = useParams()
  const [workshop, setWorkshop] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadWorkshop = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await workshopService.getById(id)
      setWorkshop(data)
    } catch (err) {
      setError(err.message || "Failed to load workshop details")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadWorkshop()
  }, [id])

  if (loading) return <Loading message="Loading workshop details..." />
  if (error) return <Error message={error} onRetry={loadWorkshop} />
  if (!workshop) return <Error message="Workshop not found" />

  const stageInfo = {
    1: { title: "Plan it Right", color: "primary" },
    2: { title: "Build the System", color: "accent" },
    3: { title: "Launch & Grow", color: "secondary" }
  }

  const stage = stageInfo[workshop.stage]

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
              <div className="flex items-center mb-4">
                <Badge variant={stage.color} className="mr-3">
                  Stage {workshop.stage}
                </Badge>
                <Badge variant="secondary">
                  Workshop {workshop.Id}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                {workshop.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {workshop.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-training">
                  <Button variant="accent" size="lg">
                    <ApperIcon name="Users" className="mr-2" size={20} />
                    Book This Training
                  </Button>
                </Link>
                <Link to="/training">
                  <Button variant="outline" size="lg">
                    <ApperIcon name="ArrowLeft" className="mr-2" size={20} />
                    Back to Curriculum
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
                  src={workshop.imageUrl}
                  alt={workshop.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <ApperIcon name="Clock" className="mr-2" size={16} />
                    {workshop.duration}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <ApperIcon name="BookOpen" className="mr-2" size={16} />
                    {workshop.format}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <ApperIcon name="Users" className="mr-2" size={16} />
                    Interactive
                  </div>
                  <div className="flex items-center text-gray-300">
                    <ApperIcon name="Award" className="mr-2" size={16} />
                    Certificate
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Content */}
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
                    What You'll Learn
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {workshop.description}
                  </p>
                  
                  {workshop.outcomes && workshop.outcomes.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 font-display">
                        Key Learning Outcomes
                      </h3>
                      <ul className="space-y-3">
                        {workshop.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start">
                            <ApperIcon name="Check" className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-300">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>

                <Card>
                  <h2 className="text-2xl font-bold text-white mb-6 font-display">
                    Workshop Format
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <ApperIcon name="Play" className="text-accent-500 mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Interactive Learning</h4>
                        <p className="text-gray-300 text-sm">
                          Hands-on exercises and real-world examples to reinforce concepts
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ApperIcon name="Users" className="text-accent-500 mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Group Discussions</h4>
                        <p className="text-gray-300 text-sm">
                          Collaborative sessions to share insights and best practices
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ApperIcon name="Tool" className="text-accent-500 mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Practical Tools</h4>
                        <p className="text-gray-300 text-sm">
                          Work with real marketing tools and platforms during the session
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ApperIcon name="FileText" className="text-accent-500 mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Resources Included</h4>
                        <p className="text-gray-300 text-sm">
                          Templates, worksheets, and reference materials to take away
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
                    Workshop Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{workshop.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Format:</span>
                      <span className="text-white">{workshop.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stage:</span>
                      <span className="text-white">{workshop.stage} - {stage.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Level:</span>
                      <span className="text-white">All Levels</span>
                    </div>
                  </div>
                </Card>

                <Card className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 font-display">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    This workshop is part of the complete D Marketing System Lab program. 
                    Book team training or contact us for custom arrangements.
                  </p>
                  <div className="space-y-3">
                    <Link to="/book-training">
                      <Button variant="accent" className="w-full">
                        <ApperIcon name="Users" className="mr-2" size={16} />
                        Book Team Training
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full">
                        <ApperIcon name="MessageCircle" className="mr-2" size={16} />
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </Card>

                <Card>
                  <h3 className="text-xl font-bold text-white mb-4 font-display">
                    Related Workshops
                  </h3>
                  <div className="space-y-3">
                    <Link to="/training" className="block p-3 bg-surface-800 rounded-lg hover:bg-surface-700 transition-colors">
                      <div className="text-sm text-accent-500 mb-1">Stage {workshop.stage}</div>
                      <div className="text-white font-medium">View All Workshops</div>
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

export default WorkshopDetail