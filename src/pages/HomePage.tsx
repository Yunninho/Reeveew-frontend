import { Button } from "@/components/ui/button"

export function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-5xl items-center justify-center px-6">
      <section className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Reeveew</h1>
        <p className="mt-3 text-muted-foreground">
          A base do frontend esta pronta para receber as features.
        </p>
        <Button className="mt-6" disabled>
          Em breve
        </Button>
      </section>
    </main>
  )
}
