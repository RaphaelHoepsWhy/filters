import { defineRouting } from "next-intl/routing"
import { createNavigation } from "next-intl/navigation"

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  pathnames: {
    "/": {
      en: "/",
      fr: "/",
    },
    "item/[id]": {
      en: "item/[id]",
      fr: "item/[id]",
    },
  },
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
