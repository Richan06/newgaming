import Router from "./router";
import CustomCursor from "./cursor";


import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
        <BrowserRouter>
        <CustomCursor />
      <Router />
    </BrowserRouter>
    </>
  )
}

export default App;
