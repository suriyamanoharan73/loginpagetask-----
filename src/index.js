import React from "react";
import  ReactDOM  from "react-dom/client";
import{Route,Routes,BrowserRouter} from "react-router-dom"
import Login from "./Login";
import Signup from "./Signup";
import "./index.css";
import Landing from "./landing";
import { useState } from "react";
const root=ReactDOM.createRoot(document.getElementById("root"))
function App()
{
  const [users,setusers]=useState(
    [
        {
            username:"suriya",
            password:"123"
        }
    ]
)

  return(<div>
    <BrowserRouter>


    <Routes>
      <Route path="/" element={<Login users={users} setusers={setusers}/>}></Route>
      <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}></Route>
      <Route path="/landing" element={<Landing />}></Route>

    </Routes >
    </BrowserRouter>

    

  </div>)
} 


root.render(<App />);