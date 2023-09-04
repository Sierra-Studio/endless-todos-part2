import {
  useState,
  type ChangeEventHandler,
  type FC,
  type FormEventHandler,
} from "react";
import Checkbox from "../Checkbox";
import Input from "../Input";

interface Props {
  done?: boolean;
  onChangeStatus: () => void;
  onChange: (value: string) => void;
  initialValue: string;
}

const Item: FC<Props> = ({ done, onChangeStatus, onChange, initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    onChange(value);
  };

  return (
    <div data-testid="todo-item" className="flex gap-2 py-1">
      <Checkbox checked={done} onClick={onChangeStatus} />
      <form name="edit-todo-form" onSubmit={handleSubmit}>
        <Input value={value} done={done} onChange={handleChange} />
      </form>
    </div>
  );
};

export default Item;
