import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState("과제하기");


  const [newItem, setNewItem] = useState("");

  const addNewItem = (event) => {
    event.preventDefault(); //새로고침 방지
    if (items.includes(newItem)) {
      alert("동일한 내용이 존재합니다.");
      return;
    }

    setItems([...items, newItem]);
    setNewItem(""); //키워드 입력 후 대기열 문구 비우기
  };

  const handleRemoveItem = (item) => {
    setItems(
      items.filter(function (el) {
        return el !== item;
      })
    );
  };

  return (
    <div>
      <h1>to do list</h1>

      <form onSubmit={addNewItem}>
        <input
          id="newItem"
          value={newItem}
          onChange={function (event) {
            setNewItem(event.target.value);
          }}
        />
        <button>작성하기</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item} <button onClick={() => handleRemoveItem(item)}>삭제</button>
          </li>
        ))};
      </ul>
    </div>
  );
}

export default App;
