"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

const navigation = [
  { name: "Startseite", href: "#" },
  { name: "Leistungen", href: "#leistungen" },
  { name: "Über uns", href: "#ueber-uns" },
  { name: "Kontakt", href: "#kontakt" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top bar with contact info */}
      <div className="hidden md:block bg-foreground text-background py-2 text-sm">
        <Container size="lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href="tel:+4971394888992"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>+49 7139 48 88 99 2</span>
              </a>
              <a
                href="mailto:info@schoenbeck-neuenstadt.de"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>info@schoenbeck-neuenstadt.de</span>
              </a>
            </div>
            <div className="text-muted-foreground/80 dark:text-muted/80">
              Mo-Fr 9-18 Uhr | Sa 9-13 Uhr
            </div>
          </div>
        </Container>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b"
            : "bg-background"
        )}
      >
        <Container size="lg">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="https://www.schoenbeck-neuenstadt.de/wp-content/uploads/go-x/u/63620a9a-121b-4b15-998a-a8cd3cf80635/image-384x145.png"
                alt="Optik Uhren Schmuck Schönbeck"
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="ml-4">
                <a href="#kontakt">Termin vereinbaren</a>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 border-b" : "max-h-0"
          )}
        >
          <Container>
            <nav className="py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button className="w-full" size="lg">
                  <a href="tel:+4971394888992">Jetzt anrufen</a>
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      </header>
    </>
  )
}
