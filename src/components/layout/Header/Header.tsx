import BaseLayout from "../BaseLayout/BaseLayout";

import HeaderTitleBar from "../../Header/HeaderTitleBar/HeaderTitleBar";
import BootLog from "../../Header/BootLog/BootLog";
import Hero from "../../Header/Hero/Hero";
import HeaderFooter from "../../Header/HeaderFooter/HeaderFooter";

import type { LogEntry } from "../../../types/LogEntry";
import type { Contact } from "../../../types/Contact";

import styles from "./Header.module.css";

export default function Header() {
  const bootLogs = [
    {
      status: "OK",
      message: "Starting portfolio.service...",
    },
    {
      status: "OK",
      message: "Loading skill modules... done",
    },
    {
      status: "OK",
      message: "Mounting /dev/projects... done",
    },
    {
      status: "OK",
      message: "All systems nominal.",
    },
  ] satisfies LogEntry[];

  const contacts = [
    {
      label: "tel",
      title: "+55 (85) 9 8217-2002",
      href: "tel:+5585982172002",
      value: "+55 (85) 9 8217-2002",
    },
    {
      label: "mail",
      title: "joaopedrocal101@gmail.com",
      href: "mailto:joaopedrocal101@gmail.com",
      value: "joaopedrocal101@gmail.com",
    },
    {
      label: "linkedin",
      title: "https://www.linkedin.com/in/jo%C3%A3o-pedro-lima-464398222/",
      href: "https://www.linkedin.com/in/jo%C3%A3o-pedro-lima-464398222/",
      value: "/in/joão-pedro-lima",
    },
    {
      label: "github",
      title: "https://github.com/limajpp",
      href: "https://github.com/limajpp",
      value: "@limajpp",
    },
    {
      label: "gitlab",
      title: "https://gitlab.com/limajpp",
      href: "https://gitlab.com/limajpp",
      value: "@limajpp",
    },
  ] satisfies Contact[];

  return (
    <BaseLayout>
      <HeaderTitleBar
        windowText="terminal - bash - 80x24"
        pathText="~/portfolio"
      />
      <section id={styles["header-content"]}>
        <BootLog logs={bootLogs} />
        <Hero
          name="JOÃO PEDRO LIMA"
          role="Full Stack Developer & Scientific Researcher"
        />
        <HeaderFooter contacts={contacts} />
      </section>
    </BaseLayout>
  );
}
