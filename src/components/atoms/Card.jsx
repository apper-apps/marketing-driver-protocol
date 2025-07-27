import React from "react"
import { cn } from "@/utils/cn"

const Card = React.forwardRef(({ 
  children, 
  className,
  hover = false,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-gradient-card backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300",
        hover && "hover:shadow-glow-hover hover:scale-[1.02] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = "Card"

export default Card