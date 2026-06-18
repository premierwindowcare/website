import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationPageLayout } from "@/components/location-page-layout"
import { baseUrl, citySlug, getLocationPage, serviceCities } from "@/lib/site-pages"

type LocationRouteProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return serviceCities.map((city) => ({
    slug: citySlug(city),
  }))
}

export async function generateMetadata({ params }: LocationRouteProps): Promise<Metadata> {
  const { slug } = await params
  const page = getLocationPage(slug)

  if (!page) {
    return {}
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${baseUrl}/${page.slug}`,
    },
  }
}

export default async function LocationPage({ params }: LocationRouteProps) {
  const { slug } = await params
  const page = getLocationPage(slug)

  if (!page) {
    notFound()
  }

  return <LocationPageLayout page={page} />
}
