import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Home />}/>
        <Route path={"/todos"} element={<TodoPage />}/>
      </Routes>
    </div>
  );
};

export default App;