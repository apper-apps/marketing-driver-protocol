import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Card from "@/components/atoms/Card"
import Badge from "@/components/atoms/Badge"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Privacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-dark py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="accent" className="mb-4">Legal Information</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Your privacy is important to us. This policy explains how we collect, 
                use, and protect your personal information.
              </p>
              <p className="text-gray-400">
                Last updated: March 1, 2024
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="prose prose-invert max-w-none">
              <div className="space-y-8">
                {/* Information We Collect */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">
                    Information We Collect
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      We collect information you provide directly to us, such as when you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fill out contact forms or booking requests</li>
                      <li>Subscribe to our newsletter or blog updates</li>
                      <li>Participate in training programs</li>
                      <li>Communicate with us via email or phone</li>
                      <li>Use our lead calculator or other interactive tools</li>
                    </ul>
                    <p>
                      This information may include your name, email address, company name, 
                      phone number, and any other information you choose to provide.
                    </p>
                  </div>
                </div>

                {/* How We Use Your Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">
                    How We Use Your Information
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Respond to your inquiries and provide requested services</li>
                      <li>Schedule and deliver training programs</li>
                      <li>Send you marketing communications (with your consent)</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </div>

                {/* Information Sharing */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">
                    Information Sharing
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      We do not sell, trade, or rent your personal information to third parties. 
                      We may share your information only in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With your explicit consent</li>
                      <li>To comply with legal requirements or court orders</li>
                      <li>To protect our rights, property, or safety</li>
                      <li>With trusted service providers who assist in our operations</li>
                    </ul>
                  </div>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">
                    Data Security
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      We implement appropriate technical and organizational measures to protect 
                      your personal information against unauthorized access, alteration, disclosure, 
                      or destruction. However, no method of transmission over the internet is 
                      100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>
                </div>

                {/* Cookies and Tracking */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">
                    Cookies and Tracking
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      We use cookies and similar tracking technologies to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Improve user experience</li>
                      <li>Provide personalized content</li>
                    </ul>
                    <p>
                      You can control cookie settings through your browser preferences.
                    </p>
                  </div>
                </div>

                {/* Your Rights */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">
                    Your Rights
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      Depending on your location, you may have the following rights regarding 
                      your personal information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access to your personal information</li>
                      <li>Correction of inaccurate information</li>
                      <li>Deletion of your personal information</li>
                      <li>Restriction of processing</li>
                      <li>Data portability</li>
                      <li>Objection to processing</li>
                    </ul>
                    <p>
                      To exercise these rights, please contact us using the information provided below.
                    </p>
                  </div>
                </div>

                {/* Third-Party Services */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">
                    Third-Party Services
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      Our website may contain links to third-party websites or services. 
                      We are not responsible for the privacy practices of these third parties. 
                      We encourage you to review their privacy policies before providing any 
                      personal information.
                    </p>
                  </div>
                </div>

                {/* Children's Privacy */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">
                    Children's Privacy
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      Our services are not directed to children under 13 years of age. 
                      We do not knowingly collect personal information from children under 13. 
                      If we become aware that we have collected such information, we will 
                      delete it promptly.
                    </p>
                  </div>
                </div>

                {/* Changes to This Policy */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">
                    Changes to This Policy
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      We may update this privacy policy from time to time. We will notify you 
                      of any material changes by posting the new policy on this page and updating 
                      the "Last updated" date. We encourage you to review this policy periodically.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-surface-800 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">
                    Contact Us
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      If you have any questions about this privacy policy or our data practices, 
                      please contact us:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <ApperIcon name="Mail" className="text-accent-500 mr-2" size={16} />
                        <span>info@dmarketinglab.com</span>
                      </div>
                      <div className="flex items-center">
                        <ApperIcon name="Phone" className="text-accent-500 mr-2" size={16} />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-start">
                        <ApperIcon name="MapPin" className="text-accent-500 mr-2 mt-1" size={16} />
                        <span>123 Marketing Street<br />Digital City, DC 12345</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-12 text-center">
              <Link to="/">
                <Button variant="accent" size="lg">
                  <ApperIcon name="ArrowLeft" className="mr-2" size={20} />
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Privacy