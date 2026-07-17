import BaseLayout from "../BaseLayout/BaseLayout";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <BaseLayout>
      <div id={styles.header}>
        <div id={styles["ascii-text-container"]}>
          <span>terminal - bash - 80x24</span>
        </div>
        <div id={styles["header-title"]}>
          <div id={styles.action}>
            <div />
            <div />
            <div />
          </div>
          <h3 className={styles["folder-path-text"]}>~/portfolio</h3>
        </div>
      </div>
    </BaseLayout>
  );
}
