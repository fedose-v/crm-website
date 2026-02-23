import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Контакты — FlowCRM",
  description:
    "Свяжитесь с командой FlowCRM. Адрес офиса, телефон, email и форма обратной связи.",
}

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
