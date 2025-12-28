import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Trust } from "@/components/sections/trust"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
