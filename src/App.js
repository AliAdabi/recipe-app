import Pages from "./pages/Pages";
import Category from "./components/Category/Category";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
        <Router>

        <Category/>
        <Pages/>

        </Router>

    </div>
  );
}

export default App;
