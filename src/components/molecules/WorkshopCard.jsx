import React from "react"
import { Link } from "react-router-dom"
import Card from "@/components/atoms/Card"
import Button from "@/components/atoms/Button"
import Badge from "@/components/atoms/Badge"

const WorkshopCard = ({ workshop }) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="primary">Stage {workshop.stage}</Badge>
          <span className="text-sm text-gray-400">Workshop {workshop.id}</span>
        </div>
        
        <img
          src={workshop.thumbnailUrl}
          alt={workshop.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        
        <h3 className="text-xl font-semibold text-white mb-3 font-display">
          {workshop.title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {workshop.description}
        </p>
        
        {workshop.outcomes && workshop.outcomes.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-200 mb-2">Key Outcomes:</h4>
            <ul className="space-y-1">
              {workshop.outcomes.slice(0, 2).map((outcome, index) => (
                <li key={index} className="text-sm text-gray-400 flex items-start">
                  <span className="text-accent-500 mr-2">•</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <Link to={`/workshop/${workshop.id}`}>
        <Button variant="accent" className="w-full">
          Learn More
        </Button>
      </Link>
    </Card>
  )
}

export default WorkshopCard