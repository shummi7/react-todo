import { useState } from "react";

const AddTodo = ({ addToStorage }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Add Text");
      return;
    }
    addToStorage(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="form-text"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input className="form-button" type="submit" value="+" />
      </form>
    </div>
  );
};
export default AddTodo;
