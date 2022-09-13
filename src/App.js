import Pages from "./pages/Pages";
import Category from "./components/Category/Category";
import {BrowserRouter as Router} from "react-router-dom";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
        <Router>
        <Search/>
        <Category/>
        <Pages/>

        </Router>

    </div>
  );
}

export default App;
