import { Home, Building2, CheckCircle, Shield, Calendar } from "lucide-react"

export function TrustBar() {
  const trustItems = [
    {
      icon: Home,
      secondaryIcon: Building2,
      title: "Residential & Commercial",
    },
    {
      icon: CheckCircle,
      title: "Streak-Free Guarantee",
    },
    {
      icon: Shield,
      title: "Fully Insured",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
    },
  ]

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-deep text-center mb-8">
          Why West Michigan Trusts Us
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-blue-soft border border-blue-pale"
            >
              <div className="flex items-center gap-1">
                <item.icon className="w-5 h-5 text-blue-primary" />
                {item.secondaryIcon && (
                  <item.secondaryIcon className="w-5 h-5 text-blue-primary" />
                )}
              </div>
              <span className="text-blue-deep font-medium text-sm md:text-base whitespace-nowrap">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
