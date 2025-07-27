import React, { useState, useEffect } from "react"
import Card from "@/components/atoms/Card"
import Button from "@/components/atoms/Button"
import FormField from "@/components/molecules/FormField"
import Input from "@/components/atoms/Input"
import ApperIcon from "@/components/ApperIcon"
import { motion } from "framer-motion"

const LeadCalculator = () => {
  const [formData, setFormData] = useState({
    monthlyTraffic: "",
    conversionRate: "",
    averageOrderValue: ""
  })
  
  const [results, setResults] = useState({
    projectedLeads: 0,
    projectedRevenue: 0
  })

  const [showResults, setShowResults] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateResults = () => {
    const traffic = parseFloat(formData.monthlyTraffic) || 0
    const rate = parseFloat(formData.conversionRate) || 0
    const value = parseFloat(formData.averageOrderValue) || 0

    const leads = Math.round(traffic * (rate / 100))
    const revenue = leads * value

    setResults({
      projectedLeads: leads,
      projectedRevenue: revenue
    })

    setShowResults(true)
  }

  useEffect(() => {
    if (formData.monthlyTraffic && formData.conversionRate && formData.averageOrderValue) {
      calculateResults()
    } else {
      setShowResults(false)
    }
  }, [formData])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="bg-gradient-dark py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Lead Revenue Calculator
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how much revenue you could generate with an optimized marketing system
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card>
            <div className="flex items-center mb-6">
              <ApperIcon name="Calculator" className="text-accent-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white font-display">
                Enter Your Numbers
              </h3>
            </div>

            <div className="space-y-6">
              <FormField label="Monthly Website Traffic" required>
                <Input
                  type="number"
                  placeholder="e.g., 10000"
                  value={formData.monthlyTraffic}
                  onChange={(e) => handleInputChange("monthlyTraffic", e.target.value)}
                />
              </FormField>

              <FormField label="Conversion Rate (%)" required>
                <Input
                  type="number"
                  step="0.1"
                  placeholder="e.g., 2.5"
                  value={formData.conversionRate}
                  onChange={(e) => handleInputChange("conversionRate", e.target.value)}
                />
              </FormField>

              <FormField label="Average Order Value ($)" required>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="e.g., 297"
                  value={formData.averageOrderValue}
                  onChange={(e) => handleInputChange("averageOrderValue", e.target.value)}
                />
              </FormField>

              <Button 
                variant="accent" 
                className="w-full"
                onClick={calculateResults}
                disabled={!formData.monthlyTraffic || !formData.conversionRate || !formData.averageOrderValue}
              >
                <ApperIcon name="TrendingUp" className="mr-2" size={20} />
                Calculate Potential
              </Button>
            </div>
          </Card>

          {/* Results */}
          <Card className="relative overflow-hidden">
            <div className="flex items-center mb-6">
              <ApperIcon name="BarChart3" className="text-primary-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white font-display">
                Your Potential Results
              </h3>
            </div>

            {showResults ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="text-center p-6 bg-gradient-primary rounded-lg">
                  <div className="text-4xl font-bold text-white mb-2">
                    {results.projectedLeads.toLocaleString()}
                  </div>
                  <div className="text-lg text-purple-100">
                    Monthly Leads
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-accent rounded-lg">
                  <div className="text-4xl font-bold text-white mb-2">
                    {formatCurrency(results.projectedRevenue)}
                  </div>
                  <div className="text-lg text-orange-100">
                    Monthly Revenue
                  </div>
                </div>

                <div className="bg-green-600/20 border border-green-500 rounded-lg p-4">
                  <div className="flex items-start">
                    <ApperIcon name="TrendingUp" className="text-green-400 mr-3 mt-1" size={20} />
                    <div>
                      <div className="text-green-400 font-semibold mb-1">
                        Annual Potential: {formatCurrency(results.projectedRevenue * 12)}
                      </div>
                      <div className="text-sm text-gray-300">
                        This is what you could achieve with an optimized marketing system
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="primary" className="w-full">
                  <ApperIcon name="Rocket" className="mr-2" size={20} />
                  Start Building Your System
                </Button>
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <ApperIcon name="Calculator" className="text-gray-500 mx-auto mb-4" size={48} />
                <p className="text-gray-400">
                  Fill in your numbers to see your potential results
                </p>
              </div>
            )}
          </Card>
        </div>

        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Card>
              <h3 className="text-lg font-semibold text-white mb-4 font-display">
                Ready to Turn This Potential Into Reality?
              </h3>
              <p className="text-gray-300 mb-6">
                Our D Marketing System Lab will teach you how to build the automated system that generates these results.
              </p>
              <Button variant="accent" size="lg">
                Join the Training Program
              </Button>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default LeadCalculator