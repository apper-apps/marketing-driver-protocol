import React from "react"
import { Link } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Training", href: "/training" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ]

  const services = [
    { name: "Book Event Speaking", href: "/book-event" },
    { name: "Tool Reviews", href: "/book-review" },
    { name: "Team Training", href: "/book-training" },
    { name: "Digital Marketing", href: "/services" }
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ]

  return (
    <footer className="bg-gradient-dark border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <ApperIcon name="Zap" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-white font-display">
                D Marketing Lab
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Build a complete and automated digital marketing system with our proven 3-stage curriculum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <ApperIcon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <ApperIcon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <ApperIcon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <ApperIcon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-display">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-display">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-display">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <ApperIcon name="Mail" className="mr-3" size={16} />
                info@dmarketinglab.com
              </div>
              <div className="flex items-center text-gray-400">
                <ApperIcon name="Phone" className="mr-3" size={16} />
                +1 (555) 123-4567
              </div>
              <div className="flex items-start text-gray-400">
                <ApperIcon name="MapPin" className="mr-3 mt-1" size={16} />
                123 Marketing Street<br />
                Digital City, DC 12345
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} D Marketing Lab. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer