import React from "react"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="bg-red-500/20 border border-red-500 rounded-full p-4 mb-4">
        <ApperIcon name="AlertCircle" className="text-red-400" size={32} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">Oops!</h3>
      <p className="text-gray-400 mb-6 text-center max-w-md">{message}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          <ApperIcon name="RefreshCw" className="mr-2" size={16} />
          Try Again
        </Button>
      )}
    </div>
  )
}

export default Error