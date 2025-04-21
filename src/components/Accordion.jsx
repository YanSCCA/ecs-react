import clsx from "clsx";
import { useRef, useState } from "react";

export default function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  return (
    <div>
      <button className={clsx("accordion", open && "open")} onClick={() => setOpen(!open)}>{question}</button>
      <div ref={panelRef} className="panel" style={{ maxHeight: open ? panelRef.current.scrollHeight : null }}>
        <p>{answer}</p>
      </div>
    </div>
  )
}