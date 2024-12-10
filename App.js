import react from "react";
import ReactDOM from "react-dom";
import { useEffect , useState } from "react";
import { useFocusHook } from "./src/hook/useFocusHook";

const App = () => {
  const [button , setButton] = useState(false);
  const focus = useFocusHook(button);
  console.log(focus);
    
  return <h1><button
     onClick = {() => setButton(true)}
  >Check Focus</button></h1>;
};
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
