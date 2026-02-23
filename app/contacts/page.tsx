"use client"

import { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Адрес",
    details: ["г. Москва, ул. Тверская, д. 12,", "БЦ Белая Площадь, офис 450"],
  },
  {
    icon: Phone,
    title: "Телефон",
    details: ["+7 (495) 123-45-67", "+7 (800) 555-35-35 (бесплатно)"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@flowcrm.ru", "support@flowcrm.ru"],
  },
  {
    icon: Clock,
    title: "Время работы",
    details: ["Пн-Пт: 09:00 - 19:00", "Сб-Вс: выходной"],
  },
]

export default function ContactsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Контакты
          </p>
          <h1
            className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Свяжитесь с нами
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            Готовы ответить на ваши вопросы и помочь выбрать оптимальное решение для вашего бизнеса.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3
                  className="mb-2 font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                {item.details.map((detail) => (
                  <p key={detail} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <div>
              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                  Напишите нам
                </p>
                <h2
                  className="text-3xl font-bold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Форма обратной связи
                </h2>
              </div>

              {submitted ? (
                <div className="rounded-xl border border-border bg-card p-12 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3
                    className="mb-3 text-xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Сообщение отправлено
                  </h3>
                  <p className="text-muted-foreground">
                    Мы получили ваше сообщение и ответим в ближайшее время.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 rounded-xl border border-border bg-card p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                        Имя *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@company.ru"
                        className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Тема
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Выберите тему</option>
                      <option value="demo">Запрос демонстрации</option>
                      <option value="pricing">Вопрос по тарифам</option>
                      <option value="support">Техническая поддержка</option>
                      <option value="partnership">Партнерство</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                      Сообщение *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Опишите ваш вопрос..."
                      className="resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Отправить сообщение
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Map placeholder + quick contacts */}
            <div className="flex flex-col gap-8">
              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=37.58%2C55.74%2C37.62%2C55.77&layer=mapnik"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Карта расположения офиса FlowCRM"
                  className="w-full"
                />
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h3
                  className="mb-2 text-lg font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Быстрая связь
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Предпочитаете мессенджеры? Свяжитесь с нами через удобный для вас канал.
                </p>
                <div className="flex flex-col gap-3">
                  <span className="inline-flex items-center gap-2 text-sm text-foreground">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    Telegram: @flowcrm_support
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-foreground">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    WhatsApp: +7 (495) 123-45-67
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
