import { Link } from "react-router"
import { Button } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-5xl items-center justify-center px-6">
      <section className="text-center">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Pagina nao encontrada</h1>
        <Link to="/" className="mt-6 inline-block">
          <Button>Voltar ao inicio</Button>
        </Link>
      </section>
    </main>
  )
}
