import React, {useState} from "react";
import {atom, useSetRecoilState, useRecoilValue} from "recoil";

const todoListState = atom({
  key: "TodoList",
  default: []
});

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

const RequestList = () => {
  const [inputValue, setInputValue] = useState("");
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ]);
    setInputValue("");
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
      {todoList.map((todoItem) => (
        <div key={todoItem.id}> {todoItem.text}</div>
      ))}
    </div>
  );
};

export default RequestList;
