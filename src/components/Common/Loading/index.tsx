import styles from "./styles.module.scss";

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.spin}></div>
    </div>
  );
}

export default Loading;
