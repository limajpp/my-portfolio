import styles from "./HeaderTitleBar.module.css";

interface HeaderTitleBar {
  windowText: string;
  pathText: string;
}

export default function HeaderTitleBar({
  windowText,
  pathText,
}: HeaderTitleBar) {
  return (
    <section id={styles && styles.header}>
      <div id={styles && styles["ascii-text-container"]}>
        <span>{windowText}</span>
      </div>
      <div id={styles && styles["header-title"]}>
        <div id={styles && styles.action}>
          <div />
          <div />
          <div />
        </div>
        <h3 className={styles && styles["folder-path-text"]}>{pathText}</h3>
      </div>
    </section>
  );
}
