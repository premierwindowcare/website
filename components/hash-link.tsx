"use client"

import * as React from "react"

type HashLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: `#${string}` | `/#${string}`
}

export const HashLink = React.forwardRef<HTMLAnchorElement, HashLinkProps>(
  ({ href, onClick, ...props }, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event)

      if (event.defaultPrevented) {
        return
      }

      const hashIndex = href.indexOf("#")

      if (hashIndex === -1) {
        return
      }

      const id = href.slice(hashIndex + 1)
      const target = document.getElementById(id)

      if (!target) {
        return
      }

      event.preventDefault()
      window.history.replaceState(null, "", `/#${id}`)
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return <a ref={ref} href={href} onClick={handleClick} {...props} />
  }
)

HashLink.displayName = "HashLink"
