import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "О компании — FlowCRM",
  description:
    "Узнайте больше о команде FlowCRM. Мы создаем современные инструменты для автоматизации бизнес-процессов.",
}

const values = [
  {
    icon: Target,
    title: "Миссия",
    description:
      "Сделать автоматизацию бизнес-процессов доступной для компаний любого масштаба, от стартапов до корпораций.",
  },
  {
    icon: Eye,
    title: "Видение",
    description:
      "Стать ведущей платформой для визуального проектирования и исполнения бизнес-процессов в России и СНГ.",
  },
  {
    icon: Heart,
    title: "Ценности",
    description:
      "Прозрачность, инновации и ориентация на результат. Мы верим, что технологии должны упрощать работу.",
  },
]

const milestones = [
  { year: "2018", event: "Основание компании и начало разработки FlowCRM" },
  { year: "2019", event: "Запуск первой версии CRM с базовым функционалом" },
  { year: "2020", event: "Разработка BPMN конструктора и выход версии 2.0" },
  { year: "2022", event: "500+ активных компаний, расширение команды до 40 человек" },
  { year: "2024", event: "Запуск корпоративного решения и on-premise версии" },
  { year: "2026", event: "FlowCRM 3.0 с AI-ассистентом для построения процессов" },
]

const team = [
  { name: "Алексей Петров", role: "CEO и основатель", initials: "АП" },
  { name: "Мария Козлова", role: "CTO", initials: "МК" },
  { name: "Дмитрий Волков", role: "Руководитель продукта", initials: "ДВ" },
  { name: "Анна Сидорова", role: "Директор по продажам", initials: "АС" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                О компании
              </p>
              <h1
                className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Мы создаем будущее бизнес-автоматизации
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/70">
                FlowCRM — это команда из 40+ инженеров, дизайнеров и экспертов в области BPM, объединенных одной целью: сделать автоматизацию доступной каждому.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-primary-foreground/10 shadow-2xl">
              <Image
                src="/images/team-office.jpg"
                alt="Команда FlowCRM в офисе"
                width={800}
                height={520}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3
                  className="mb-2 text-lg font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "40+", label: "Сотрудников" },
              { number: "500+", label: "Компаний-клиентов" },
              { number: "50 000+", label: "Созданных процессов" },
              { number: "8 лет", label: "На рынке" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-3xl font-bold text-foreground lg:text-4xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.number}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Команда
            </p>
            <h2
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Руководство
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                  <span
                    className="text-xl font-bold text-accent"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Наша история
            </p>
            <h2
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Путь развития
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="flex gap-6 rounded-xl border border-border bg-card p-6"
              >
                <span
                  className="shrink-0 text-2xl font-bold text-accent"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {milestone.year}
                </span>
                <p className="text-foreground">{milestone.event}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Связаться с нами
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
