import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import Authentication from "./components/authentication/Authentication";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path={'/*'} element={true?<HomePage/>:<Authentication/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
