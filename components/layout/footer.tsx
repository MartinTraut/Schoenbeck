import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Separator } from "@/components/ui/separator"

const navigation = {
  main: [
    { name: "Startseite", href: "#" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Kontakt", href: "#kontakt" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/profile.php?id=100083355511658",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/schoenbeck_neuenstadt",
      icon: Instagram,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <Container size="lg" className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <img
              src="https://www.schoenbeck-neuenstadt.de/wp-content/uploads/go-x/u/63620a9a-121b-4b15-998a-a8cd3cf80635/image-228x86.png"
              alt="Schönbeck Logo"
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-muted dark:text-muted-foreground text-sm leading-relaxed">
              Kompetente Beratung, große Auswahl und Top-Qualität seit über 120
              Jahren in Neuenstadt am Kocher.
            </p>
            <div className="flex gap-4 mt-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-background transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-4 text-sm text-muted dark:text-muted-foreground">
              <li>
                <a
                  href="https://maps.google.com/?q=Hauptstraße+39,+Neuenstadt+am+Kocher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-background transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    Hauptstraße 39
                    <br />
                    74196 Neuenstadt am Kocher
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+4971394888992"
                  className="flex items-center gap-3 hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+49 7139 48 88 99 2</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@schoenbeck-neuenstadt.de"
                  className="flex items-center gap-3 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>info@schoenbeck-neuenstadt.de</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">
              Öffnungszeiten
            </h3>
            <ul className="space-y-2 text-sm text-muted dark:text-muted-foreground">
              <li className="flex justify-between">
                <span>Mo – Mi, Fr</span>
                <span>09:00 – 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Donnerstag</span>
                <span>09:00 – 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Samstag</span>
                <span>09:00 – 13:00</span>
              </li>
              <li className="flex justify-between text-muted-foreground/60">
                <span>Sonntag</span>
                <span>Geschlossen</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground/60">
              Mittagspause: 13:00 – 14:00 Uhr
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted dark:text-muted-foreground hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-muted/20" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted dark:text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Schönbeck e. K. Alle Rechte vorbehalten.</p>
          <nav className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-background transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
