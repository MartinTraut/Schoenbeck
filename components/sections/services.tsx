"use client"

import { Glasses, Watch, Gem, Phone, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Animate } from "@/components/ui/animate"

const services = [
  {
    title: "Optik",
    icon: Glasses,
    image:
      "https://www.schoenbeck-neuenstadt.de/wp-content/uploads/go-x/u/c2a880c3-59c9-45c8-ae58-63d5d973237d/l0,t0,w870,h692/image-768x611.webp",
    description:
      "Professionelle Überprüfung der Sehschärfe und individuelle Brillenberatung. Wir finden die perfekte Brille für Ihre Bedürfnisse.",
    features: [
      "Sehschärfe- und Brillenglasstärken-Ermittlung",
      "Umfassende Brillenberatung",
      "Führerschein-Sehtests",
    ],
    cta: "Termin vereinbaren",
    phone: "+49 7139 48 88 99 2",
  },
  {
    title: "Uhren",
    icon: Watch,
    image:
      "https://www.schoenbeck-neuenstadt.de/wp-content/uploads/go-x/u/e01bb0a7-e24c-4499-ba4b-a41d1b898925/l0,t66,w874,h695/image-768x611.webp",
    description:
      "Von der eleganten Armbanduhr bis zur klassischen Standuhr – Verkauf und Reparatur in unserer eigenen Uhrmacherwerkstatt.",
    features: [
      "Armbanduhren, Wecker, Wanduhren, Standuhren",
      "Eigene Uhrmacherwerkstatt",
      "Professioneller Reparaturservice",
    ],
    cta: "Sortiment entdecken",
  },
  {
    title: "Schmuck",
    icon: Gem,
    image:
      "https://www.schoenbeck-neuenstadt.de/wp-content/uploads/go-x/u/c427122d-9d62-435a-bd2a-4cfbbcc6ebc6/l0,t81,w874,h695/image-768x611.webp",
    description:
      "Über 50 Kollektionen von namhaften Herstellern. Trauringe, Neuanfertigungen und Reparaturen in unserer Meistergoldschmiedewerkstatt.",
    features: [
      "Über 50 Schmuck-Kollektionen",
      "Trauringe, Partner- & Freundschaftsringe",
      "Meistergoldschmiedewerkstatt",
    ],
    cta: "Kollektion ansehen",
  },
]

export function Services() {
  return (
    <Section id="leistungen">
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Animate animation="fade-up">
            <Badge variant="secondary" className="mb-4">
              Unsere Leistungen
            </Badge>
          </Animate>
          <Animate animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Drei Bereiche. Ein Anspruch: Qualität.
            </h2>
          </Animate>
          <Animate animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground">
              Ob Brille, Uhr oder Schmuckstück – wir beraten Sie persönlich und
              bieten umfassenden Service aus eigenen Meisterwerkstätten.
            </p>
          </Animate>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Animate
              key={service.title}
              animation="fade-up"
              delay={index * 100}
            >
              <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Schönbeck`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {service.phone ? (
                    <div className="pt-4 border-t">
                      <Button variant="default" size="sm" className="w-full" asChild>
                        <a href={`tel:${service.phone.replace(/\s/g, "")}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          {service.cta}
                        </a>
                      </Button>
                    </div>
                  ) : (
                    <div className="pt-4 border-t">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full group/btn"
                        asChild
                      >
                        <a href="#kontakt">
                          {service.cta}
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Animate>
          ))}
        </div>
      </Container>
    </Section>
  )
}
