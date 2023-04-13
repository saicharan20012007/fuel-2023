import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";


import OrderFuelDashboard from "./components/UserOrder"

const App = () => <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/about" Component={About}/>
    <Route path="/login" Component={Login}/>
    <Route path="/register" Component={Register}/>
    <Route path="/admin" Component={AdminDashboard}/>
    <Route path="/order" Component={OrderFuelDashboard}/>
    </Routes>;

export default App;