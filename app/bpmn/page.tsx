import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  MousePointerClick,
  GitBranch,
  Timer,
  Layers,
  RefreshCw,
  FileCheck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "BPMN Конструктор — FlowCRM",
  description:
    "Визуальный BPMN конструктор для моделирования и автоматизации бизнес-процессов. Drag-and-drop интерфейс, стандарт BPMN 2.0.",
}

const capabilities = [
  {
    icon: MousePointerClick,
    title: "Drag & Drop",
    description:
      "Создавайте схемы процессов простым перетаскиванием элементов на холст. Без кода, без сложных настроек.",
  },
  {
    icon: GitBranch,
    title: "Шлюзы и ветвления",
    description:
      "Параллельные и эксклюзивные шлюзы для создания сложной логики ветвлений в ваших процессах.",
  },
  {
    icon: Timer,
    title: "Таймеры и события",
    description:
      "Настраивайте таймеры, сигналы и сообщения для запуска процессов по расписанию или по условию.",
  },
  {
    icon: Layers,
    title: "Подпроцессы",
    description:
      "Вложенные подпроцессы для декомпозиции сложных бизнес-процессов на управляемые блоки.",
  },
  {
    icon: RefreshCw,
    title: "Версионирование",
    description:
      "Храните историю изменений каждого процесса. Откатывайтесь к предыдущим версиям в один клик.",
  },
  {
    icon: FileCheck,
    title: "Валидация BPMN 2.0",
    description:
      "Автоматическая проверка схем на соответствие стандарту BPMN 2.0. Экспорт в XML и другие форматы.",
  },
]

const bpmnElements = [
  { name: "Стартовое событие", shape: "circle", color: "bg-emerald-500" },
  { name: "Задача", shape: "rect", color: "bg-accent" },
  { name: "Шлюз", shape: "diamond", color: "bg-amber-500" },
  { name: "Подпроцесс", shape: "rect-dashed", color: "bg-accent" },
  { name: "Промежуточное событие", shape: "circle-double", color: "bg-amber-500" },
  { name: "Конечное событие", shape: "circle-bold", color: "bg-red-500" },
]

export default function BpmnPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Ключевая функция
              </p>
              <h1
                className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                BPMN Конструктор
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/70">
                Мощный визуальный редактор для моделирования бизнес-процессов по стандарту BPMN 2.0. Проектируйте, тестируйте и запускайте процессы без единой строчки кода.
              </p>
              <Link
                href="/#request-form"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Попробовать бесплатно
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="overflow-hidden rounded-xl border border-primary-foreground/10 shadow-2xl">
              <Image
                src="../../public/images/bpmn-constructor.jpg"
                alt="BPMN Конструктор — визуальный редактор бизнес-процессов"
                width={800}
                height={520}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BPMN Elements Preview */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Элементы нотации
            </p>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Полная поддержка BPMN 2.0
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Все стандартные элементы нотации доступны для построения диаграмм любой сложности.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {bpmnElements.map((el) => (
              <div
                key={el.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center">
                  {el.shape === "circle" && (
                    <div className={`h-12 w-12 rounded-full border-2 border-emerald-500`} />
                  )}
                  {el.shape === "rect" && (
                    <div className="h-10 w-14 rounded-md border-2 border-accent" />
                  )}
                  {el.shape === "diamond" && (
                    <div className="h-10 w-10 rotate-45 border-2 border-amber-500" />
                  )}
                  {el.shape === "rect-dashed" && (
                    <div className="h-10 w-14 rounded-md border-2 border-dashed border-accent" />
                  )}
                  {el.shape === "circle-double" && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-500">
                      <div className="h-9 w-9 rounded-full border-2 border-amber-500" />
                    </div>
                  )}
                  {el.shape === "circle-bold" && (
                    <div className="h-12 w-12 rounded-full border-4 border-red-500" />
                  )}
                </div>
                <p className="text-xs font-medium text-foreground">{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Возможности
            </p>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Мощный инструмент для моделирования
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <cap.icon className="h-6 w-6 text-accent" />
                </div>
                <h3
                  className="mb-2 text-lg font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Как это работает
            </p>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Три шага к автоматизации
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Спроектируйте",
                description:
                  "Перетаскивайте элементы BPMN на холст, соединяйте их и настраивайте условия переходов.",
              },
              {
                step: "02",
                title: "Настройте",
                description:
                  "Добавьте исполнителей, формы, уведомления и интеграции для каждого шага процесса.",
              },
              {
                step: "03",
                title: "Запустите",
                description:
                  "Активируйте процесс и наблюдайте за его выполнением в реальном времени через мониторинг.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-8">
                <span
                  className="text-4xl font-bold text-accent/30"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.step}
                </span>
                <h3
                  className="text-xl font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#request-form"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Запросить демонстрацию
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
