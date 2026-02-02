import { useState } from "react";
import React from "react";

export default function AddMovie({ onAdd }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введи название Фильма"
      />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
}
