import type { Contact } from "../../../types/Contact";

import styles from "./HeaderFooter.module.css";

interface HeaderFooterProps {
  contacts: Contact[];
}

export default function HeaderFooter({ contacts }: HeaderFooterProps) {
  return (
    <div id={styles["header-footer"]}>
      {contacts.map((contact) => (
        <div
          key={contact.label}
          className={styles["header-footer-contact-container"]}
        >
          <span>{contact.label}</span>
          <span className={styles.colon}>:</span>
          <h4 title={contact.title}>
            <a
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {contact.value}
            </a>
          </h4>
        </div>
      ))}
    </div>
  );
}
