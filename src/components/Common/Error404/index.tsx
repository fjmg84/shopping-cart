import { useNavigate } from "react-router-dom";
import Button from "../Buttons";


type Props = {
  message: string;
  error?: number;
  children?: JSX.Element;
};

function Error({ message, error, children }: Props) {
  const navigate = useNavigate();
  return (
    <div>
      {error && <h1>{`{${error}}`}</h1>}
      <h4>{message}</h4>
      {children}

      <Button  handleFunction={() => navigate("/")}>
        <img  src="/svg/left.svg" alt="return" />
      </Button>
    </div>
  );
}

export default Error;
