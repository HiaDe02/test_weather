import { useState } from "react";

const useForm = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };
  return {
    value,
    handleChange,
    reset,
  };
};

export default useForm;
