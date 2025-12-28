"use client"

import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Animate } from "@/components/ui/animate"

const openingHours = [
  { day: "Montag – Mittwoch", hours: "09:00 – 13:00, 14:00 – 18:00" },
  { day: "Donnerstag", hours: "09:00 – 13:00, 14:00 – 19:00" },
  { day: "Freitag", hours: "09:00 – 13:00, 14:00 – 18:00" },
  { day: "Samstag", hours: "09:00 – 13:00" },
  { day: "Sonntag", hours: "Geschlossen", closed: true },
]

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Hauptstraße 39, 74196 Neuenstadt am Kocher",
    href: "https://maps.google.com/?q=Hauptstraße+39,+74196+Neuenstadt+am+Kocher",
    external: true,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 7139 48 88 99 2",
    href: "tel:+4971394888992",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@schoenbeck-neuenstadt.de",
    href: "mailto:info@schoenbeck-neuenstadt.de",
  },
]

export function Contact() {
  return (
    <Section id="kontakt" variant="dark" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <Container size="lg" className="relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Animate animation="fade-up">
            <Badge
              variant="outline"
              className="mb-4 border-white/20 text-white/80"
            >
              Kontakt
            </Badge>
          </Animate>
          <Animate animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Besuchen Sie uns in Neuenstadt
            </h2>
          </Animate>
          <Animate animation="fade-up" delay={200}>
            <p className="text-lg text-white/70">
              Wir freuen uns auf Ihren Besuch. Vereinbaren Sie gerne vorab einen
              Termin für eine persönliche Beratung.
            </p>
          </Animate>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info & Opening Hours */}
          <Animate animation="slide-left">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Kontaktdaten
                </h3>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-2 rounded-lg bg-white/10 text-white/80 group-hover:bg-white/20 transition-colors">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 mb-1">
                          {item.label}
                        </p>
                        <p className="text-white group-hover:text-white/80 transition-colors flex items-center gap-2">
                          {item.value}
                          {item.external && (
                            <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                          )}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-white mb-6">
                  Öffnungszeiten
                </h3>

                <div className="space-y-3">
                  {openingHours.map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center py-2 border-b border-white/10 last:border-0 ${
                        item.closed ? "text-white/40" : "text-white/80"
                      }`}
                    >
                      <span className="text-sm">{item.day}</span>
                      <span className="text-sm font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Animate>

          {/* CTA Card */}
          <Animate animation="slide-right">
            <div className="space-y-6">
              <Card className="bg-white text-foreground">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Termin vereinbaren</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Rufen Sie uns an oder besuchen Sie uns direkt im Geschäft.
                    Wir nehmen uns Zeit für Ihre persönliche Beratung.
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <a href="tel:+4971394888992">
                      <Phone className="h-4 w-4 mr-2" />
                      +49 7139 48 88 99 2
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/10 text-white">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Optik-Termine
                    </h3>
                  </div>
                  <p className="text-white/70 mb-6">
                    Für Sehtests und ausführliche Brillenberatung empfehlen wir
                    eine vorherige Terminvereinbarung.
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="tel:+4971394888992">Optik-Termin anfragen</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Animate>
        </div>

        {/* Map placeholder - using Google Maps embed */}
        <Animate animation="fade-up" delay={300}>
          <div className="mt-12 rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.5!2d9.327791999999999!3d49.2368061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE0JzEyLjUiTiA5wrAxOSc0MC4xIkU!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              title="Standort Schönbeck in Neuenstadt am Kocher"
            />
          </div>
        </Animate>
      </Container>
    </Section>
  )
}
