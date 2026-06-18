import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { baseUrl, servicePages } from "@/lib/site-pages"

const service = servicePages.find((item) => item.slug === "exterior-window-cleaning")!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: `${baseUrl}/${service.slug}`,
  },
}

export default function ExteriorWindowCleaningPage() {
  return <ServicePageLayout service={service} />
}
