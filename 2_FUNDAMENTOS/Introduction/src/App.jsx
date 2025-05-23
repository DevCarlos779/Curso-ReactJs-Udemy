//Components
import FirstComponent from "./components/FirstComponent";
import TempExpressionsComponent from "./components/TempExpressionsComponent";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";

//Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TempExpressionsComponent />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
