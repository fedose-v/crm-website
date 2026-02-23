import Link from "next/link"

const footerLinks = {
  product: [
    { href: "/bpmn", label: "BPMN Конструктор" },
    { href: "/pricing", label: "Тарифы" },
    { href: "/#features", label: "Возможности" },
  ],
  company: [
    { href: "/about", label: "О компании" },
    { href: "/contacts", label: "Контакты" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M4 6h4v4H4V6zm6 0h4v4h-4V6zm6 0h4v4h-4V6zM7 12l3 3-3 3M13 15h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                FlowCRM
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Современная CRM система с визуальным BPMN конструктором. Автоматизируйте бизнес-процессы и повышайте эффективность вашей команды.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Продукт
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Компания
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-sm text-primary-foreground/50">
            {'© 2026 FlowCRM. Все права защищены.'}
          </p>
          <div className="flex gap-6">
            <Link href="/contacts" className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground">
              Политика конфиденциальности
            </Link>
            <Link href="/contacts" className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
