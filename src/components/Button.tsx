import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return <div className="butn btn-primary">{children}</div>;
};

export default Button;
