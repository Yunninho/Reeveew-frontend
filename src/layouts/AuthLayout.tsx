// src/layouts/AuthLayout.tsx
import { Outlet } from "react-router";

export function AuthLayout() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
            <div className="w-full max-w-sm">
                <Outlet />
            </div>
        </div>
    );
}