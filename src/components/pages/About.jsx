import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"
import Badge from "@/components/atoms/Badge"
import ApperIcon from "@/components/ApperIcon"

const About = () => {
  const achievements = [
    { number: "500+", label: "Students Trained", icon: "Users" },
    { number: "10+", label: "Years Experience", icon: "Clock" },
    { number: "95%", label: "Success Rate", icon: "Award" },
    { number: "50+", label: "Companies Helped", icon: "Building" }
  ]

  const expertise = [
    {
      title: "Marketing Automation",
      description: "Expert in creating automated systems that work 24/7",
      icon: "Cog"
    },
    {
      title: "Conversion Optimization",
      description: "Proven strategies to turn visitors into customers",
      icon: "TrendingUp"
    },
    {
      title: "Content Strategy",
      description: "Compelling messaging that resonates with audiences",
      icon: "PenTool"
    },
    {
      title: "AI Integration",
      description: "Leveraging artificial intelligence for smarter marketing",
      icon: "Zap"
    }
  ]

  const values = [
    {
      title: "Practical Results",
      description: "Focus on real tools and measurable outcomes, not theory",
      icon: "Target"
    },
    {
      title: "Simplified Learning",
      description: "Complex concepts made easy to understand and implement",
      icon: "BookOpen"
    },
    {
      title: "Continuous Support",
      description: "Ongoing guidance to ensure your success",
      icon: "Heart"
    }
  ]

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
              <Badge variant="accent" className="mb-4">Digital Marketing Expert</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                Hi, I'm Your Digital Marketing
                <span className="block text-gradient">System Architect</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                With over 10 years of experience in digital marketing, I've helped hundreds of entrepreneurs 
                and businesses build automated marketing systems that generate consistent results. My mission 
                is to make complex marketing simple and accessible for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/training">
                  <Button variant="accent" size="lg">
                    <ApperIcon name="BookOpen" className="mr-2" size={20} />
                    View Training Program
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    <ApperIcon name="MessageCircle" className="mr-2" size={20} />
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-card backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-glow">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Digital Marketing Trainer"
                  className="w-full h-96 object-cover rounded-xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">
                    Marketing System Expert
                  </h3>
                  <p className="text-gray-300">
                    Helping businesses build automated marketing that works while they sleep
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Track Record of Success
            </h2>
            <p className="text-xl text-gray-300">
              Numbers that speak to real impact and results
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <ApperIcon name={achievement.icon} className="text-accent-500 mx-auto mb-4" size={40} />
                  <div className="text-3xl font-bold text-gradient mb-2 font-display">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300">
                    {achievement.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-300">
              Specialized knowledge in the most effective marketing strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="text-center h-full">
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <ApperIcon name={item.icon} className="text-white" size={28} />
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

      {/* Philosophy & Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              My Philosophy & Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I believe marketing should be simple, effective, and focused on real results. 
              Here's what drives my approach to teaching and consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center h-full">
                  <ApperIcon name={value.icon} className="text-accent-500 mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-semibold text-white mb-4 font-display">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Personal Story */}
          <Card className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                My Journey
              </h3>
            </div>
            <div className="space-y-6 text-gray-300">
              <p>
                I started my journey in digital marketing over a decade ago, working with small businesses 
                who were struggling to get results from their marketing efforts. I saw how complex and 
                overwhelming the digital marketing world had become, with endless tools, strategies, and 
                supposed "secrets" that promised everything but delivered little.
              </p>
              <p>
                That's when I decided to develop a system that cuts through the noise. The D Marketing System Lab 
                was born from years of testing, refining, and simplifying what actually works. I've taken the 
                complexity out of digital marketing and created a clear, step-by-step process that anyone can follow.
              </p>
              <p>
                Today, I'm passionate about sharing this system with entrepreneurs and businesses who want to 
                build marketing that works automatically. Because I believe everyone deserves a marketing system 
                that generates results while they focus on what they do best.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's build your automated marketing system that generates results 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/training">
              <Button variant="accent" size="lg">
                <ApperIcon name="BookOpen" className="mr-2" size={20} />
                Join Training Program
              </Button>
            </Link>
            <Link to="/book-training">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
                <ApperIcon name="Users" className="mr-2" size={20} />
                Book Team Training
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About