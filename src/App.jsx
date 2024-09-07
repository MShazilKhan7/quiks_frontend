import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import "./index.css";
import AppRoutes from "./app/routes";
import { UserProvider } from "./app/context/UserContext";

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
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
