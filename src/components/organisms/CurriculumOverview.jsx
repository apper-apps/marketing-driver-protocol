import React from "react"
import { Link } from "react-router-dom"
import StageCard from "@/components/molecules/StageCard"
import Button from "@/components/atoms/Button"
import { useWorkshops } from "@/hooks/useWorkshops"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"

const CurriculumOverview = () => {
  const { workshops, loading, error, refetch } = useWorkshops()

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={refetch} />

  const workshopsByStage = workshops.reduce((acc, workshop) => {
    if (!acc[workshop.stage]) {
      acc[workshop.stage] = []
    }
    acc[workshop.stage].push(workshop)
    return acc
  }, {})

  return (
    <section className="py-16 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            The D Marketing System Lab Curriculum
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A practical program built on 3 main stages, designed to help you build a complete and automated digital marketing system — step by step, using real tools and without complexity.
          </p>
          <Link to="/training">
            <Button variant="primary" size="lg">
              View Full Curriculum
            </Button>
          </Link>
        </div>

        <div className="space-y-8">
          {[1, 2, 3].map((stage) => (
            <StageCard
              key={stage}
              stage={stage}
              workshops={workshopsByStage[stage] || []}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-card backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-display">
              Ready to Build Your Marketing System?
            </h3>
            <p className="text-gray-300 mb-6">
              From defining the offer and audience to launching campaigns and tracking results — get a full roadmap to build a marketing system that works efficiently, even while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/training">
                <Button variant="accent" size="lg">
                  Start Learning Today
                </Button>
              </Link>
              <Link to="/book-training">
                <Button variant="outline" size="lg">
                  Book Team Training
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurriculumOverview