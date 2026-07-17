import styles from "./Hero.module.css";

interface HeroProps {
  name: string;
  role: string;
}

export default function Hero({ name, role }: HeroProps) {
  return (
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
          <h1>{name}</h1>
          <div className={styles.cursor} />
        </div>
        <div>
          <span>{"# "}</span>
          <h2>{role}</h2>
        </div>
      </div>
      <hr />
    </div>
  );
}
