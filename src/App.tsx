import "./styles.css"
import { useEffect } from "react";
import Root from "./components/Root";

function App() {

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [])

  return (
    <Root/>
  );
}

export default App;