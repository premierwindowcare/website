import type { Metadata } from "next"
import Link from "next/link"
import { baseUrl } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: "Hard Water Removal | Premier Window Care",
  alternates: {
    canonical: `${baseUrl}/hard-water-removal`,
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyHardWaterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-soft px-4 text-center">
      <div className="max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <meta httpEquiv="refresh" content="0; url=/hard-water-removal" />
        <h1 className="mb-3 text-2xl font-bold text-blue-deep">
          Hard Water Removal
        </h1>
        <p className="mb-6 text-muted-foreground">
          This service page has moved to the updated hard water removal page.
        </p>
        <Link
          href="/hard-water-removal"
          className="inline-flex rounded-full bg-blue-primary px-6 py-3 font-semibold text-white hover:bg-blue-sky"
        >
          Go to Hard Water Removal
        </Link>
      </div>
    </main>
  )
}
