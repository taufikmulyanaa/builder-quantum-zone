import { PropsWithChildren } from "react";
import { Link, useInRouterContext } from "react-router-dom";
import { cn } from "@/lib/utils";

type NavProps = React.PropsWithChildren<{ to: string; className?: string }>;
function NavLink({ to, className, children }: NavProps) {
  const inRouter = useInRouterContext();
  if (inRouter) return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <span className={cn(
              "grid size-9 place-items-center rounded-xl text-white",
              "bg-gradient-to-br from-amber-300 via-orange-400 to-orange-600 shadow"
            )}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"/></svg>
            </span>
            <div className="font-extrabold tracking-tight text-xl">Akademi</div>
          </NavLink>
          <nav className="flex items-center gap-3 text-sm">
            <NavLink to="/" className="rounded-md px-3 py-2 hover:bg-accent">Beranda</NavLink>
            <NavLink to="/akademi" className="rounded-md px-3 py-2 hover:bg-accent">Akademi</NavLink>
            <div className="ml-2 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <span className="size-2 rounded-full bg-emerald-500" />
              Membership Aktif
            </div>
            <div className="ml-4 size-9 rounded-full bg-muted ring-1 ring-border" />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t bg-white/50">
        <div className="container py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Akademi. Dibuat untuk Taufik Mulyana.
        </div>
      </footer>
    </div>
  );
}
