"use client"

import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Animate } from "@/components/ui/animate"

const highlights = [
  "Über 120 Jahre Familientradition",
  "Meistergoldschmiedewerkstatt",
  "Eigene Uhrmacherwerkstatt",
  "Professionelle Sehberatung",
]

export function About() {
  return (
    <Section id="ueber-uns" variant="muted">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <Animate animation="slide-left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.schoenbeck-neuenstadt.de/wp-content/uploads/go-x/u/7f749e7b-d90a-431f-bae3-4d81e2d75782/l0,t358,w1330,h998/image-768x576.jpg"
                  alt="Jörg Schönbeck - Inhaber"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-2xl -z-10" />
            </div>
          </Animate>

          {/* Content */}
          <Animate animation="slide-right">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Über uns
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Qualität und Vertrauen seit Generationen
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Kompetente Beratung, große Auswahl, Top-Qualität und umfangreiche
                Serviceleistungen – seit über 120 Jahren mitten im Städtle in
                Neuenstadt. Als Familienunternehmen ist uns persönliche Betreuung
                besonders wichtig.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                In unserer Meistergoldschmiedewerkstatt und Uhrmacherwerkstatt
                fertigen wir individuelle Stücke, führen Reparaturen durch und
                beraten Sie mit Fachwissen und Leidenschaft.
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" asChild>
                <a href="#kontakt">Besuchen Sie uns</a>
              </Button>
            </div>
          </Animate>
        </div>
      </Container>
    </Section>
  )
}
