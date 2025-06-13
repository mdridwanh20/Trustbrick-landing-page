
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Home from "./Pages/Home";


createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <Home></Home>
  </BrowserRouter>
);
