// src/app/router.tsx
import { createBrowserRouter } from "react-router";
import { MainLayout } from "@/layouts/MainLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { HomePage } from "@/features/home/HomePage";
import { PokemonDetails } from "@/features/pokemonDetails/pokemonDetails";
import { LoginPage } from "@/features/auth/loginPage";
import { RegisterPage } from "@/features/auth/registerPage";
import { NotFoundPage } from "@/features/NotFoundPage";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/movies/:id", element: <PokemonDetails/> },
            { path: "*", element: <NotFoundPage /> },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <RegisterPage /> },
        ],
    },
]);