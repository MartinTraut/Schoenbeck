"use client"

import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { Animate } from "@/components/ui/animate"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.schoenbeck-neuenstadt.de/wp-content/uploads/go-x/u/e9704203-f9e3-413f-b4b7-59a5be872e89/l0,t14,w1931,h927/image-911x437.jpg"
          alt="Schönbeck Geschäft - Optik, Uhren und Schmuck"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      <Container size="lg" className="relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <Animate animation="fade-up" delay={0}>
            <Badge variant="secondary" className="mb-6">
              Seit über 120 Jahren in Neuenstadt
            </Badge>
          </Animate>

          <Animate animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Service heißt, das ganze Geschäft mit den Augen des Kunden zu sehen
            </h1>
          </Animate>

          <Animate animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Kompetente Beratung, große Auswahl und Top-Qualität bei Optik, Uhren
              und Schmuck – persönlich und vertrauensvoll.
            </p>
          </Animate>

          <Animate animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" asChild>
                <a href="#kontakt">
                  Termin vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a
                  href="https://mytrends.store/schoenbeck"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zum Online-Shop
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Animate>

          {/* Trust indicators */}
          <Animate animation="fade-up" delay={400}>
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Meisterbetrieb
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Eigene Werkstätten
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Persönliche Beratung
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  )
}
