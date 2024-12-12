import "./App.css";
import { UniversalInput } from "./UniversalInput";
import { useLocalStorage } from "./hooks";
import { useDebounce } from "./hooks";

const App = () => {
  const [firstValue, setFirstValue] = useLocalStorage("first", "");
  const [secondValue, setSecondValue] = useLocalStorage("second", "");
  const [thirdValue, setThirdValue] = useLocalStorage("third", "");
  const [fourthValue, setFourthValue] = useLocalStorage("fourth", "");
  const [fifthValue, setFifthValue] = useLocalStorage("fifth", "");

  const debouncedFirstValue = useDebounce(firstValue, 200);
  const debouncedThirdValue = useDebounce(thirdValue, 200);

  return (
    <div className="main">
      <h1 className="title">THIS IS TEST TASK</h1>
      <div className="inputItems">
        <UniversalInput
          type="numeric"
          placeholder="Number type"
          value={debouncedFirstValue}
          onChange={(e) => setFirstValue(e.target.value)}
        />
        <UniversalInput
          placeholder="Text type"
          value={secondValue}
          onChange={(e) => setSecondValue(e.target.value)}
        />
        <UniversalInput
          type="textArea"
          placeholder="Text multiline type"
          value={debouncedThirdValue}
          onChange={(e) => setThirdValue(e.target.value)}
        />
        <UniversalInput
          type="mask"
          mask={"111-111"}
          value={fourthValue}
          onChange={(e) => setFourthValue(e.target.value)}
        />
        <UniversalInput
          // readOnly
          onEndEditing={(val) => {
            console.log("Finished editing with value:", val);
          }}
          type="select"
          value={fifthValue}
          onChange={(value) => setFifthValue(value)}
          options={{
            groupId: "firstGroup",
            label: "First group",
            items: [
              { value: "first element", label: "first element" },
              { value: "second element", label: "second element" },
              { value: "third element", label: "third element" },
            ],
          }}
          placeholder="Another type"
        />
      </div>
    </div>
  );
};

export default App;
