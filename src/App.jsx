import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import "./index.css";
import AppRoutes from "./app/routes";

function App() {

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error, " + err);
      });
  }, []);

  return (
    <div id="app">
      <AppRoutes />
    </div>
  );
}

export default App;
