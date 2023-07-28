import { useNavigate } from "react-router-dom";
import Button from "../Buttons";
import styles from "./styles.module.scss";

type Props = {
  message: string;
  error: number;
  children?: JSX.Element;
};

function Error({ message, error, children }: Props) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>{`{${error}}`}</h1>
      <h4>{message}</h4>
      {children}

      <Button className={styles.btn} handleFunction={() => navigate("/")}>
        <img className={styles.btn__image} src="/svg/left.svg" alt="return" />
      </Button>
    </div>
  );
}

export default Error;
