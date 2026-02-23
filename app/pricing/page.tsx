import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Тарифы — FlowCRM",
  description:
    "Гибкие тарифные планы FlowCRM. Выберите подходящий план для вашей компании.",
}

const plans = [
  {
    name: "Старт",
    price: "200 000",
    period: "/ мес",
    description: "Для небольших команд, начинающих автоматизацию.",
    features: [
      "До 5 пользователей",
      "10 активных процессов",
      "Базовый BPMN конструктор",
      "Email уведомления",
      "Техподдержка по email",
      "1 ГБ хранилище",
    ],
    highlighted: false,
    cta: "Выбрать Старт",
  },
  {
    name: "Бизнес",
    price: "500 000",
    period: "/ мес",
    description: "Оптимальный выбор для растущих компаний.",
    features: [
      "До 25 пользователей",
      "Безлимитные процессы",
      "Полный BPMN конструктор",
      "Интеграции с 1С и Битрикс",
      "Приоритетная техподдержка",
      "10 ГБ хранилище",
      "Аналитические дашборды",
      "API доступ",
    ],
    highlighted: true,
    cta: "Выбрать Бизнес",
  },
  {
    name: "Корпоративный",
    price: "По запросу",
    period: "",
    description: "Для крупных организаций с индивидуальными требованиями.",
    features: [
      "Безлимитные пользователи",
      "Безлимитные процессы",
      "Расширенный BPMN конструктор",
      "Все интеграции",
      "Персональный менеджер",
      "Безлимитное хранилище",
      "SLA 99.99%",
      "On-premise установка",
      "Кастомная разработка",
    ],
    highlighted: false,
    cta: "Связаться с нами",
  },
]

const faqs = [
  {
    q: "Есть ли бесплатный пробный период?",
    a: "Да, мы предоставляем 14-дневный бесплатный пробный период на тарифе Бизнес без ограничений по функционалу.",
  },
  {
    q: "Можно ли перейти на другой тариф?",
    a: "Вы можете изменить тарифный план в любое время. При повышении тарифа изменения вступают в силу немедленно.",
  },
  {
    q: "Как осуществляется оплата?",
    a: "Мы принимаем оплату по безналичному расчету для юридических лиц, а также банковские карты для индивидуальных подписок.",
  },
  {
    q: "Есть ли скидки при оплате за год?",
    a: "Да, при годовой подписке вы получаете скидку 20% на любой тарифный план.",
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Тарифы
          </p>
          <h1
            className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Прозрачные цены для любого масштаба
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            Выберите план, который подходит вашей компании. Начните с бесплатного пробного периода и масштабируйтесь по мере роста.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "flex flex-col rounded-xl border p-8",
                  plan.highlighted
                    ? "border-accent bg-card shadow-xl ring-2 ring-accent/20"
                    : "border-border bg-card"
                )}
              >
                {plan.highlighted && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Популярный
                  </span>
                )}

                <h3
                  className="text-xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className="text-4xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  )}
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#request-form"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors",
                    plan.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Частые вопросы
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
