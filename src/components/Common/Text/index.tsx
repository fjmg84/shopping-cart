import styles from "./styles.module.scss";

const Text = ({ text = "", myClassName = "" }) => {
  return (
    <div className={styles.container}>
      <p className={myClassName}>{text}</p>
    </div>
  );
};

export default Text;
