import { Input, InputProps } from "antd";
import { Control, Controller } from "react-hook-form";
type IProps = InputProps & {
  required?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  control?: Control<any>;
  iconRender?: any;
};
function AppInputPassword(props: IProps) {
  const {
    required,
    label = "Password",
    name,
    placeholder,
    control,
    iconRender,
    ...restProps
  } = props;
  const _placeholder = placeholder || "Enter " + label;
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm	font-medium	text-[#344054]">
        {label} {required && "*"}
      </p>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <div className="w-full">
              <Input.Password
                className={error && "border border-danger"}
                title={label}
                value={value}
                size="large"
                onChange={onChange}
                placeholder={_placeholder}
                iconRender={iconRender}
                {...restProps}
              />
              {error && <p className="text-danger">{error.message}</p>}
            </div>
          );
        }}
      />
    </div>
  );
}
export default AppInputPassword;
