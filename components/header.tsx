"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/bpmn", label: "BPMN Конструктор" },
  { href: "/pricing", label: "Тарифы" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
              <path d="M4 6h4v4H4V6zm6 0h4v4h-4V6zm6 0h4v4h-4V6zM7 12l3 3-3 3M13 15h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            FlowCRM
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/#request-form"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Оставить заявку
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#request-form"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Оставить заявку
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
