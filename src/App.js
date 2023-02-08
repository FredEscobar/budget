import "./App.css";
import Header from "./components/common/header";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <h1 className="is-size-2 is-flex is-align-content-start m-3">Budget</h1> */}
      <MainPage />
    </div>
  );
}

export default App;
