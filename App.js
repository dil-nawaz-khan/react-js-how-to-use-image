import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";

export default function App({ root }) {
  return (
    <div>
      {/* <Counter /> */}
      <AppleCounter root={root} />
    </div>
  );
}
