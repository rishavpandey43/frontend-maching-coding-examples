import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import Router from "./Router";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main>
      <BrowserRouter>
        <Header />
        <section className="container px-4 mx-auto">
          <Router />
        </section>
      </BrowserRouter>
    </main>
  </React.StrictMode>
);
