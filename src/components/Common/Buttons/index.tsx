interface PropButton {
  className?: string;
  styleImage?: string;
  children: JSX.Element;
  handleFunction: () => void;
}

function Button({ className, children, handleFunction }: PropButton) {
  return (
    <>
      <button className={`${className}`} onClick={handleFunction}>
        {children}
      </button>
    </>
  );
}

export default Button;
