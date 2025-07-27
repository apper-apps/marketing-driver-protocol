import React from "react"
import { cn } from "@/utils/cn"

const Badge = React.forwardRef(({ 
  children, 
  variant = "primary", 
  className,
  ...props 
}, ref) => {
  const variants = {
    primary: "bg-primary-600 text-white",
    secondary: "bg-surface-800 text-gray-200",
    accent: "bg-accent-500 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-600 text-white",
    error: "bg-red-600 text-white"
  }

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
})

Badge.displayName = "Badge"

export default Badge