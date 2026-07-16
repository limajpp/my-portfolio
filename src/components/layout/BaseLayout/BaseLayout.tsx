import type { ReactNode } from "react";

import Container from "../../ui/Container";

import styles from "./BaseLayout.module.css";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return <Container className={styles.terminalWindow}>{children}</Container>;
}
