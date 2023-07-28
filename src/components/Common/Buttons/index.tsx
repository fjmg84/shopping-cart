interface PropButton {
  text?: string;
  img?: string;
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

//{img ? <img className={styleImage} src={img} alt={text} /> : text}
export default Button;
