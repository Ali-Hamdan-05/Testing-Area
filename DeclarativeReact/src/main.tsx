import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import { Greeting, Contact, Farewell, PathError } from "./App";
import "./index.css";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="greeting" element={<Greeting />} />
        <Route path="contact" element={<Contact />} />
        <Route path="farewell" element={<Farewell />} />
        <Route path="*" element={<PathError />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
