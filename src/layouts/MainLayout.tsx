import { useState, type FormEvent } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function MainLayout() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSearch(e: FormEvent) {
        e.preventDefault();
        if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            <header className="border-b">
                <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
                    <Link to="/" className="flex items-center gap-2 font-bold">
                        <Film className="h-5 w-5" /> CineReview
                    </Link>

                    <form onSubmit={handleSearch} className="flex-1">
                        <Input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Buscar filme..."
                            className="max-w-md"
                        />
                    </form>

                    <Button asChild variant="outline">
                        <Link to="/login">Entrar</Link>
                    </Button>
                </div>
            </header>

            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
                <Outlet />
            </main>

            <footer className="border-t py-4 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} CineReview
            </footer>
        </div>
    );
}