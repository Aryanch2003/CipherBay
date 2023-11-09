import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState } from 'react';
import CoinDetails from "./components/CoinDetails";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SingUp from "./components/SingUp";



import "./styles/App.scss";
import  "./styles/colors.scss";
import "./styles/Home.scss";
import "./styles/Header.scss";
import "./styles/Footer.scss";
import "./styles/Login.scss";
import "./styles/mediaquery.scss";

function App() {

  const [ user, setLoginUser] = useState({

  })
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coins" element={<Coins />}/>
        <Route path="/exchanges" element={<Exchanges />}/>
        <Route path="/Login" element={<Login setLoginUser={setLoginUser} />}/>
        <Route path="/SingUp" element={<SingUp />}/>
        <Route path="/coin/:id" element={<CoinDetails />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
