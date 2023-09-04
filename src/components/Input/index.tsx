import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  done?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, done, ...props }, ref) => {
    return (
      <input
        className={`
        w-full
        border-charcoal-600
        bg-transparent
        text-white
        placeholder:text-white/60
        focus:border-b
        focus:outline-none
        ${!value && "border-b"}
        ${done && "line-through"}
      `}
        type="text"
        value={value}
        onSubmit={() => alert("it works!")}
        {...props}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
