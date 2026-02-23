import { Workflow, BarChart3, Users, Shield, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: Workflow,
    title: "BPMN Конструктор",
    description: "Визуальный редактор бизнес-процессов с поддержкой стандарта BPMN 2.0. Drag-and-drop интерфейс для быстрого проектирования.",
  },
  {
    icon: Zap,
    title: "Автоматизация",
    description: "Автоматическое выполнение рутинных задач, триггеры и условия для оптимизации рабочих процессов.",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Подробные отчеты и дашборды для отслеживания эффективности процессов и работы команды.",
  },
  {
    icon: Users,
    title: "Управление командой",
    description: "Роли, права доступа и совместная работа. Контролируйте задачи и нагрузку каждого сотрудника.",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Шифрование данных, двухфакторная аутентификация и соответствие требованиям 152-ФЗ.",
  },
  {
    icon: Globe,
    title: "Интеграции",
    description: "Подключение к 1С, Битрикс24, Telegram, почтовым сервисам и другим популярным платформам.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Возможности
          </p>
          <h2
            className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Все инструменты для управления бизнесом
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            FlowCRM объединяет управление клиентами, автоматизацию процессов и аналитику в одном решении.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
