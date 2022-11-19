import { useState, useTransition } from "react";
import "./styles.css";

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
    startTransition(() => {
      const theList = [];
      for (let i = 0; i < 10000; i++) {
        theList.push(e.target.value);
      }
      setList(theList);
    });
  };

  return (
    <div className="App">
      <h2>React 18 - Transition</h2>
      <input
        type="text"
        placeholder="type here"
        value={value}
        onChange={handleChange}
      />
      {isPending ? (
        <p>Transition is working ...</p>
      ) : (
        list.map((item, idx) => <p key={idx}>{item}</p>)
      )}
    </div>
  );
}
