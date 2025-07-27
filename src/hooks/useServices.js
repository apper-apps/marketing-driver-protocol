import { useState, useEffect } from "react"
import { serviceService } from "@/services/api/serviceService"

export const useServices = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadServices = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await serviceService.getAll()
      setServices(data)
    } catch (err) {
      setError(err.message || "Failed to load services")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadServices()
  }, [])

  return {
    services,
    loading,
    error,
    refetch: loadServices
  }
}