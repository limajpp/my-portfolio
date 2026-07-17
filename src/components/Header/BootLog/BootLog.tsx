import type { LogEntry } from "../../../types/LogEntry";

import styles from "./BootLog.module.css";

interface BootLogProps {
  logs: LogEntry[];
}

export default function BootLog({ logs }: BootLogProps) {
  return (
    <div className={styles.bootLog}>
      {logs.map((log, index) => (
        <div key={index} className={styles.log}>
          <span>{`[ ${log.status} ]`}</span>
          <p>{log.message}</p>
        </div>
      ))}
    </div>
  );
}
