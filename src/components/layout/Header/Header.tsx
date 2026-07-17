import BaseLayout from "../BaseLayout/BaseLayout";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <BaseLayout>
      <section id={styles.header}>
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
      </section>
      <section id={styles["header-content"]}>
        <div id={styles["boot-log"]}>
          <div className={styles.log}>
            <span>{"[  OK  ]"}</span>
            <p>Starting portfolio.service...</p>
          </div>
          <div className={styles.log}>
            <span>{"[  OK  ]"}</span>
            <p>Loading skill modules... done</p>
          </div>
          <div className={styles.log}>
            <span>{"[  OK  ]"}</span>
            <p>Mounting /dev/projects... done</p>
          </div>
          <div className={styles.log}>
            <span>{"[  OK  ]"}</span>
            <p>All systems nominal.</p>
          </div>
        </div>
        <div id={styles.hero}>
          <div>
            <span>{"joao@dev "}</span>
            <span>{": "}</span>
            <span>{"~ "}</span>
            <span>{"$ "}</span>
            <span>{"whoami"}</span>
          </div>
          <div>
            <div>
              <h1>JOÃO PEDRO LIMA</h1>
              <div className={styles.cursor} />
            </div>
            <div>
              <span>{"# "}</span>
              <h2>Full Stack Developer & Scientific Researcher</h2>
            </div>
          </div>
          <hr />
          <div id={styles["header-footer"]}>
            <div className={styles["header-footer-contact-container"]}>
              <span>tel</span>
              <span className={styles.colon}>:</span>
              <h4 title="+55 (85) 9 8217-2002">
                <a href="tel:+5585982172002">+55 (85) 9 8217-2002</a>
              </h4>
            </div>
            <div className={styles["header-footer-contact-container"]}>
              <span>mail</span>
              <span className={styles.colon}>:</span>
              <h4 title="joaopedrocal101@gmail.com">
                <a href="mailto:joaopedrocal101@gmail.com">
                  joaopedrocal101@gmail.com
                </a>
              </h4>
            </div>
            <div className={styles["header-footer-contact-container"]}>
              <span>linkedin</span>
              <span className={styles.colon}>:</span>
              <h4 title="https://www.linkedin.com/in/jo%C3%A3o-pedro-lima-464398222/">
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-pedro-lima-464398222/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /in/joão-pedro-lima
                </a>
              </h4>
            </div>
            <div className={styles["header-footer-contact-container"]}>
              <span>github</span>
              <span className={styles.colon}>:</span>
              <h4 title="https://github.com/limajpp">
                <a
                  href="https://github.com/limajpp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @limajpp
                </a>
              </h4>
            </div>
            <div className={styles["header-footer-contact-container"]}>
              <span>gitlab</span>
              <span className={styles.colon}>:</span>
              <h4 title="https://gitlab.com/limajpp">
                <a
                  href="https://gitlab.com/limajpp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @limajpp
                </a>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
