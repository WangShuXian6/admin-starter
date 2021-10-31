import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import routerList from "@/routes";

function App() {
  const Routers = useRoutes(routerList);
  return (
    <div className="App">
      {Routers}
    </div>
  );
}

export default App;
