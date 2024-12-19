import { Button, ButtonProps } from "antd";
import { ReactElement } from "react";

interface IProps {
  children?: string | ReactElement;

  className?: any;
}

function PrimaryButton(props: IProps & ButtonProps) {
  const { children = "Submit", className, ...restProps } = props;

  return (
    <Button
      type="primary"
      size="large"
      {...restProps}
      className={`font-inter border-1 h-11 rounded-lg border-solid border-[#F9DC5C] bg-[#F9DC5C]  px-6 py-3 text-sm font-semibold  text-black transition hover:bg-[#f9d843] focus:outline-none ${className}`}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
