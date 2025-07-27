import React from "react"
import ApperIcon from "@/components/ApperIcon"

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-600 border-t-primary-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ApperIcon name="Zap" className="text-primary-500" size={24} />
        </div>
      </div>
      <p className="text-gray-400 mt-4">{message}</p>
    </div>
  )
}

export default Loading