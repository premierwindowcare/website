"use client"

import * as React from "react"

type HashLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: `#${string}` | `/#${string}`
}

export const HashLink = React.forwardRef<HTMLAnchorElement, HashLinkProps>(
  ({ href, onClick, ...props }, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event)
    }

    return <a ref={ref} href={href} onClick={handleClick} {...props} />
  }
)

HashLink.displayName = "HashLink"
