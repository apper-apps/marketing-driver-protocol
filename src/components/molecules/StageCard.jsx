import React from "react"
import Card from "@/components/atoms/Card"
import Badge from "@/components/atoms/Badge"

const StageCard = ({ stage, workshops }) => {
  const stageInfo = {
    1: {
      title: "Plan it Right",
      description: "Define your offer, understand your audience, and craft compelling marketing messages that resonate.",
      color: "primary"
    },
    2: {
      title: "Build the System",
      description: "Create your complete marketing infrastructure with pages, email sequences, and automation.",
      color: "accent"
    },
    3: {
      title: "Launch & Grow",
      description: "Drive traffic, analyze performance, and scale your system with AI-powered optimization.",
      color: "secondary"
    }
  }

  const info = stageInfo[stage]

  return (
    <Card className="mb-8">
      <div className="mb-6">
        <Badge variant={info.color} className="mb-3">
          Stage {stage}
        </Badge>
        <h2 className="text-2xl font-bold text-white mb-3 font-display">
          {info.title}
        </h2>
        <p className="text-gray-300">
          {info.description}
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="bg-surface-800 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">
              Workshop {workshop.id}: {workshop.title}
            </h3>
            <p className="text-sm text-gray-400">
              {workshop.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default StageCard