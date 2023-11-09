import React,{useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({setLoginUser})=>{


   
    const navigate= useNavigate()
    const [user,setUser] = useState({
       
        email: "",
        password:"",
        
    })

    const handleChange = e =>{
        const {name,value}= e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () =>{
        axios.post("http://localhost:9002/login", user)
        .then(res => {alert(res.data.message)
            setLoginUser(res.data.user)
        navigate("/")
         } )
    }

  return (
    <div className="contact">
        <main>
            <h1>Login Me</h1>

            <form>
               
                <div>
                    <label>Email</label>
                    <input type="email" name="email" required placeholder="Abc@xyz.com"  value={user.email} onChange={handleChange}/>
                </div>

                

                <div>
                    <label>Password</label>
                    <input type="Password" name="password" required placeholder="Password" value={user.password} onChange={handleChange} />
                </div>

               


                <button type="submit" onClick={login}>Login</button>
                <button type="submit" onClick={()=> navigate("/SingUp")}>SingUp</button> 



            </form>
        </main>
    </div>
  )
}

export default Login