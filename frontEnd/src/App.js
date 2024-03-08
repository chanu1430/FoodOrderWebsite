import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Cart from "./Cart";
import FoodItemContext from "./context/FoodItemContext";
import MiddleContent from "./MiddleContent";
import MyOrders from "./MyOrders";
import Admin from "./Admin";
function App() {
  return (
    <FoodItemContext>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/foodItems" element={<MiddleContent/>}></Route>
          <Route exact path="/myOrders" element={<MyOrders/>} />
          <Route exact path="/Admin" element={<Admin/>} />
        </Routes>
      </Router>
    </FoodItemContext>
  );
}

export default App;
