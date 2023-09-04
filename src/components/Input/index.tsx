import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  done?: boolean;
}

const Input: React.FC<Props> = ({
  value,
  done,
  ...props
}) => {
  return (
    <input
      className={`
        border-charcoal-600
        bg-transparent
        text-white
        placeholder:text-white/60
        focus:border-b
        focus:outline-none
        w-full
        ${!value && "border-b"}
        ${done && 'line-through'}
      `}
      type="text"
      value={value}
      onSubmit={() => alert('it works!')}
      {...props}
    />
  );
};

export default Input;
