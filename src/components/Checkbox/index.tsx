import React from "react";

interface Props {
  checked?: boolean;
  onClick: React.MouseEventHandler;
}

const Checkbox: React.FC<Props> = ({ checked, onClick }) => {
  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={onClick}
      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-charcoal-600"
    >
      {checked && (
        <div
          data-testid="tick"
          className="h-[1.125rem] w-[1.125rem] rounded-full bg-charcoal-800"
        />
      )}
    </div>
  );
};

export default Checkbox;
