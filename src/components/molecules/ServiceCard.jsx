import React from "react"
import { Link } from "react-router-dom"
import Card from "@/components/atoms/Card"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const ServiceCard = ({ service }) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="flex-1">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        
        <h3 className="text-xl font-semibold text-white mb-3 font-display">
          {service.title}
        </h3>
        
        <p className="text-gray-300 mb-4">
          {service.description}
        </p>
        
        <div className="text-2xl font-bold text-gradient mb-4">
          {service.price}
        </div>
        
        {service.features && service.features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-start">
                <ApperIcon name="Check" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <Link to={`/service/${service.id}`}>
        <Button variant="primary" className="w-full">
          Learn More
        </Button>
      </Link>
    </Card>
  )
}

export default ServiceCard