import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reduxStore/slice";
import AnimatedCounter from "./components/AnimatedCounter";
import { DrawnTag } from "./components";
import { MainPage } from "./pages";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
