import React from "react"
import { cn } from "@/utils/cn"

const Button = React.forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  className,
  disabled,
  ...props 
}, ref) => {
  const variants = {
    primary: "bg-gradient-primary text-white shadow-glow hover:shadow-glow-hover hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-surface-900 text-white border border-primary-600 hover:bg-primary-600 hover:scale-[1.02] active:scale-[0.98]",
    accent: "bg-gradient-accent text-white shadow-glow hover:shadow-glow-hover hover:scale-[1.02] active:scale-[0.98]",
    outline: "border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white hover:scale-[1.02] active:scale-[0.98]",
    ghost: "text-gray-300 hover:text-white hover:bg-surface-900 hover:scale-[1.02] active:scale-[0.98]"
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  }

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button