import React from "react"
import { cn } from "@/utils/cn"
import ApperIcon from "@/components/ApperIcon"

const Select = React.forwardRef(({ 
  children,
  className,
  ...props 
}, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "w-full px-4 py-3 bg-surface-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 appearance-none cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ApperIcon
        name="ChevronDown"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
        size={20}
      />
    </div>
  )
})

Select.displayName = "Select"

export default Select