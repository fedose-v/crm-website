"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function RequestForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (submitted) {
    return (
      <section id="request-form" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <div className="rounded-xl border border-border bg-card p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h2
              className="mb-3 text-2xl font-bold text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Заявка отправлена
            </h2>
            <p className="text-muted-foreground">
              Спасибо за интерес к FlowCRM! Наш менеджер свяжется с вами в ближайшее время.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="request-form" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Начните прямо сейчас
            </p>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Оставьте заявку на демонстрацию
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Заполните форму, и наш менеджер проведет для вас персональную демонстрацию возможностей FlowCRM и BPMN конструктора.
            </p>

            <div className="mt-4 flex flex-col gap-6">
              {[
                { number: "01", text: "Заполните форму заявки" },
                { number: "02", text: "Менеджер свяжется с вами" },
                { number: "03", text: "Получите персональную демонстрацию" },
              ].map((step) => (
                <div key={step.number} className="flex items-center gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-foreground"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {step.number}
                  </span>
                  <span className="text-foreground">{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ivan@company.ru"
                    className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Компания
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ООО Ваша Компания"
                    className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 999-99-99"
                    className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите о ваших задачах..."
                  className="resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Отправить заявку
                <Send className="h-4 w-4" />
              </button>

              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
