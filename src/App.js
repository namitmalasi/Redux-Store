import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions/counter";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App-header">
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch(incrementCounter(5))}>Increment</button>
      <button onClick={() => dispatch(decrementCounter(5))}>Decrement</button>
    </div>
  );
}

export default App;
