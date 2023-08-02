import styles from "./styles.module.scss";

type Props = {
  text: string;
  myClassName?: string;
  children?: JSX.Element;
};
const Text = ({ text, myClassName, children }: Props) => {
  return (
    <div className={styles.container}>
      <p className={myClassName}>{text}</p>
      {children}
    </div>
  );
};

export default Text;
