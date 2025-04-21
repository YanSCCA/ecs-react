import clsx from "clsx";
import { useState } from "react"

export default function Task({ task, duplicateTask, removeTask }) {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
  }

  return (
    <li>
      <input type="checkbox" onChange={handleCheckbox} />
      <span className={clsx("task", checked && "strikethrough")}>{task}</span>
      <button onClick={duplicateTask}>+</button>
      <button onClick={removeTask}>-</button>
    </li>
  )
}