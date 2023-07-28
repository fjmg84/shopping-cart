import Button from "../Buttons";
import styles from "./styles.module.scss";

interface ModalProps {
  handleAccept: () => void;
  handleCancel: () => void;
  question: string;
}

function Modal({ handleAccept, handleCancel, question }: ModalProps) {
  return (
    <div className={styles.toast}>
      <div className={styles.toast_container}>
        <div className={styles.toast_title}>
          <p>{question}</p>
        </div>
        <div className={styles.toast_btn}>
          <Button className={styles.accept} handleFunction={handleAccept}>
            <span>Accept</span>
          </Button>
          <Button className={styles.cancel} handleFunction={handleCancel}>
            <span>Cancel</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
