import {
  type ChangeEventHandler,
  useState,
  type FC,
  type FormEventHandler,
} from "react";
import Input from "../Input";

interface Props {
  onSubmit: (value: string) => void;
}

const NewItem: FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form name="new-item-form" onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Add todo item"
      />
    </form>
  );
};

export default NewItem;
