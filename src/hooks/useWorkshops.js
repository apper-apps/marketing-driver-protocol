import { useState, useEffect } from "react"
import { workshopService } from "@/services/api/workshopService"

export const useWorkshops = () => {
  const [workshops, setWorkshops] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadWorkshops = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await workshopService.getAll()
      setWorkshops(data)
    } catch (err) {
      setError(err.message || "Failed to load workshops")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadWorkshops()
  }, [])

  return {
    workshops,
    loading,
    error,
    refetch: loadWorkshops
  }
}