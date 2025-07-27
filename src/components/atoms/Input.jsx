import React from "react"
import { cn } from "@/utils/cn"

const Input = React.forwardRef(({ 
  type = "text", 
  className,
  ...props 
}, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "w-full px-4 py-3 bg-surface-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200",
        className
      )}
      {...props}
    />
  )
})

Input.displayName = "Input"

export default Input