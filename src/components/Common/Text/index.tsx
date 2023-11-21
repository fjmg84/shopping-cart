type Props = {
  text: string;
  myClassName?: string;
  children?: JSX.Element;
};
const Text = ({ text, myClassName, children }: Props) => {
  return (
    <div>
      <p className={myClassName}>{text}</p>
      {children}
    </div>
  );
};

export default Text;
