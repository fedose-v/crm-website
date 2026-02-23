import Image from "next/image"

export function CtaSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/analytics-dashboard.jpg"
              alt="Аналитика и отчеты FlowCRM"
              width={700}
              height={460}
              className="h-auto w-full"
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Аналитика в реальном времени
            </p>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Принимайте решения на основе данных
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Отслеживайте ключевые показатели эффективности, выявляйте узкие места в процессах и оптимизируйте работу команды с помощью интерактивных дашбордов.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                "Автоматические отчеты по KPI",
                "Визуализация воронки продаж",
                "Мониторинг выполнения процессов",
                "Экспорт данных в Excel и PDF",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
