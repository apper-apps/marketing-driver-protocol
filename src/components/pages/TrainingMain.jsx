import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"
import Badge from "@/components/atoms/Badge"
import WorkshopCard from "@/components/molecules/WorkshopCard"
import ApperIcon from "@/components/ApperIcon"
import { useWorkshops } from "@/hooks/useWorkshops"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"

const TrainingMain = () => {
  const { workshops, loading, error, refetch } = useWorkshops()

  if (loading) return <Loading message="Loading training curriculum..." />
  if (error) return <Error message={error} onRetry={refetch} />
  if (workshops.length === 0) return <Empty title="No workshops available" message="Check back soon for training updates" />

  const workshopsByStage = workshops.reduce((acc, workshop) => {
    if (!acc[workshop.stage]) {
      acc[workshop.stage] = []
    }
    acc[workshop.stage].push(workshop)
    return acc
  }, {})

  const stageInfo = {
    1: {
      title: "Plan it Right",
      description: "Define your offer, understand your audience, and craft compelling marketing messages that resonate with your target market.",
      color: "primary",
      icon: "Target"
    },
    2: {
      title: "Build the System",
      description: "Create your complete marketing infrastructure with pages, email sequences, and automation that work together seamlessly.",
      color: "accent",
      icon: "Cog"
    },
    3: {
      title: "Launch & Grow",
      description: "Drive traffic, analyze performance, and scale your system with AI-powered optimization and data-driven decisions.",
      color: "secondary",
      icon: "TrendingUp"
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
              <Badge variant="accent" className="mb-4">Complete Training Program</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                The D Marketing System Lab
                <span className="block text-gradient">Curriculum</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                A practical program built on 3 main stages, designed to help you build a complete 
                and automated digital marketing system — step by step, using real tools and without complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-training">
                  <Button variant="accent" size="xl">
                    <ApperIcon name="Users" className="mr-2" size={24} />
                    Book Team Training
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="xl">
                    <ApperIcon name="MessageCircle" className="mr-2" size={24} />
                    Contact for Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Complete Marketing System Training
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From defining the offer and audience to launching campaigns and tracking results — 
              get a full roadmap to build a marketing system that works efficiently, even while you sleep.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((stage) => {
              const info = stageInfo[stage]
              return (
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stage * 0.2 }}
                >
                  <Card className="text-center h-full">
                    <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <ApperIcon name={info.icon} className="text-white" size={32} />
                    </div>
                    <Badge variant={info.color} className="mb-4">
                      Stage {stage}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">
                      {info.title}
                    </h3>
                    <p className="text-gray-300">
                      {info.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Workshop Details by Stage */}
      {[1, 2, 3].map((stage) => {
        const stageWorkshops = workshopsByStage[stage] || []
        const info = stageInfo[stage]
        
        return (
          <section key={stage} className={stage % 2 === 0 ? "py-16 bg-gradient-dark" : "py-16 bg-background"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <Badge variant={info.color} className="mb-4">
                  Stage {stage}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                  {info.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {info.description}
                </p>
              </div>

              {stageWorkshops.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {stageWorkshops.map((workshop, index) => (
                    <motion.div
                      key={workshop.Id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <WorkshopCard workshop={workshop} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <Empty 
                  title="No workshops available" 
                  message="Workshops for this stage are coming soon"
                  icon="BookOpen"
                />
              )}
            </div>
          </section>
        )
      })}

      {/* Training Options */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Choose Your Training Format
            </h2>
            <p className="text-xl text-purple-100">
              Flexible options to fit your schedule and learning preferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <ApperIcon name="Users" className="text-accent-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-4 font-display">
                Team Training
              </h3>
              <p className="text-gray-300 mb-6">
                Complete program for your team, customized to your business needs
              </p>
              <Link to="/book-training">
                <Button variant="accent" className="w-full mb-4">
                  Book Team Training
                </Button>
              </Link>
              <div className="text-sm text-gray-400">
                Online or offline delivery available
              </div>
            </Card>

            <Card className="text-center">
              <ApperIcon name="Mic" className="text-accent-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-4 font-display">
                Event Speaking
              </h3>
              <p className="text-gray-300 mb-6">
                Keynote presentations and workshops for your events
              </p>
              <Link to="/book-event">
                <Button variant="accent" className="w-full mb-4">
                  Book Speaking
                </Button>
              </Link>
              <div className="text-sm text-gray-400">
                Customized for your audience
              </div>
            </Card>

            <Card className="text-center">
              <ApperIcon name="MessageCircle" className="text-accent-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-4 font-display">
                Custom Consulting
              </h3>
              <p className="text-gray-300 mb-6">
                One-on-one guidance tailored to your specific needs
              </p>
              <Link to="/contact">
                <Button variant="accent" className="w-full mb-4">
                  Get In Touch
                </Button>
              </Link>
              <div className="text-sm text-gray-400">
                Personalized approach
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrainingMain