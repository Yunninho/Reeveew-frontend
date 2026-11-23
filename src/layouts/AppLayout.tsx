import { Outlet } from "react-router"

export function AppLayout() {
  return (
    <div className="min-h-dvh">
      <Outlet />
    </div>
  )
}
