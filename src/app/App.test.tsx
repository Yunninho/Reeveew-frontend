// @vitest-environment jsdom

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "./App"

describe("App", () => {
  it("renders the home page", () => {
    window.history.replaceState({}, "", "/")
    render(<App />)

    expect(screen.getByRole("heading", { name: "Reeveew" })).toBeTruthy()
  })

  it("renders the not-found page for unknown routes", () => {
    window.history.replaceState({}, "", "/rota-inexistente")
    render(<App />)

    expect(screen.getByText("Pagina nao encontrada")).toBeTruthy()
  })
})
