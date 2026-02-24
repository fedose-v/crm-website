import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Новая версия 3.0
            </div>

            <h1
              className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              CRM с визуальным BPMN конструктором
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/70">
              Проектируйте, автоматизируйте и оптимизируйте бизнес-процессы вашей компании с помощью интуитивного drag-and-drop конструктора.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#request-form"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Оставить заявку
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/bpmn"
                className="inline-flex items-center justify-center rounded-md border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Подробнее о BPMN
              </Link>
            </div>

            <div className="mt-4 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-primary-foreground" style={{ fontFamily: 'var(--font-heading)' }}>500+</p>
                <p className="text-sm text-primary-foreground/50">Компаний</p>
              </div>
              <div className="h-10 w-px bg-primary-foreground/20" />
              <div>
                <p className="text-2xl font-bold text-primary-foreground" style={{ fontFamily: 'var(--font-heading)' }}>50K+</p>
                <p className="text-sm text-primary-foreground/50">Процессов</p>
              </div>
              <div className="h-10 w-px bg-primary-foreground/20" />
              <div>
                <p className="text-2xl font-bold text-primary-foreground" style={{ fontFamily: 'var(--font-heading)' }}>99.9%</p>
                <p className="text-sm text-primary-foreground/50">Uptime</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-primary-foreground/10 shadow-2xl">
              <Image
                src="/crm-website/images/hero-dashboard.jpg"
                alt="FlowCRM Dashboard с BPMN конструктором бизнес-процессов"
                width={800}
                height={520}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
