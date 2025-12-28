"use client"

import { Award, Clock, Users, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Animate } from "@/components/ui/animate"

const trustFactors = [
  {
    icon: Clock,
    title: "120+ Jahre",
    description: "Familientradition und Erfahrung in Neuenstadt",
  },
  {
    icon: Award,
    title: "Meisterbetrieb",
    description: "Goldschmiede- und Uhrmachermeister-Qualifikation",
  },
  {
    icon: Wrench,
    title: "Eigene Werkstätten",
    description: "Reparaturen und Anfertigungen vor Ort",
  },
  {
    icon: Users,
    title: "Persönlich",
    description: "Individuelle Beratung und kompetenter Service",
  },
]

export function Trust() {
  return (
    <Section size="sm" variant="default">
      <Container size="lg">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFactors.map((factor, index) => (
            <Animate key={factor.title} animation="fade-up" delay={index * 100}>
              <Card className="text-center border-0 shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <factor.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {factor.description}
                  </p>
                </CardContent>
              </Card>
            </Animate>
          ))}
        </div>
      </Container>
    </Section>
  )
}
