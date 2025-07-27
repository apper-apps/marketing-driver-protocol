import React from "react"
import { cn } from "@/utils/cn"
import Input from "@/components/atoms/Input"
import ApperIcon from "@/components/ApperIcon"

const SearchBar = ({ 
  placeholder = "Search...", 
  value, 
  onChange, 
  className 
}) => {
  return (
    <div className={cn("relative", className)}>
      <ApperIcon
        name="Search"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-10"
      />
    </div>
  )
}

export default SearchBar