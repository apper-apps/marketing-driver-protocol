import React from "react"
import { cn } from "@/utils/cn"

const Textarea = React.forwardRef(({ 
  className,
  ...props 
}, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full px-4 py-3 bg-surface-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-vertical min-h-[120px]",
        className
      )}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"

export default Textarea