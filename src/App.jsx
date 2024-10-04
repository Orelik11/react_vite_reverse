import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import goodsFromServer from "./source.json";

function App() {
  const [count, setCount] = useState(0);
  const SORT_ALPHABETICALLY = "sort alphabetically";
  const SORT_LENGHT = "sort by lenght";

  const [sortField, setSortField] = useState("");
  const [reverseData, setReverseData] = useState(false);

  let visibleData = [...goodsFromServer].sort((good1, good2) => {
    switch (sortField) {
      case SORT_ALPHABETICALLY:
        return good1.localeCompare(good2);
      case SORT_LENGHT:
        return good1.length - good2.length;
      default:
        return 0;
    }
  });
  console.log("now - " + reverseData);
  if (!reverseData) {
    visibleData.reverse();
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {[SORT_ALPHABETICALLY, SORT_LENGHT].map((btn) => (
        <button key={btn} type="button" onClick={() => setSortField(btn)}>
          {btn}
        </button>
      ))}

      <button type="button" onClick={() => setReverseData(!reverseData)}>
        Reverse
      </button>

      <ul>
        {visibleData.map((good) => (
          <li key={good}>{good}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
