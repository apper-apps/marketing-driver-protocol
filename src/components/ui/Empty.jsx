import React from "react"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Empty = ({ 
  title = "Nothing here yet", 
  message = "Check back later for updates", 
  actionLabel,
  onAction,
  icon = "Inbox"
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="bg-gray-600/20 border border-gray-600 rounded-full p-4 mb-4">
        <ApperIcon name={icon} className="text-gray-400" size={32} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-6 text-center max-w-md">{message}</p>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

export default Empty