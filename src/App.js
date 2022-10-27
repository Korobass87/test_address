import Router from "./constans/routers/routers";
import "./App.css";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Header />
      <div className={"body"}>
        <Navbar />

        <Router />
      </div>
    </>
  );
}

export default App;
