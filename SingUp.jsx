import React,{useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Contact() {

    const navigate= useNavigate()
    const [user,setUser] = useState({
        name: "",
        email: "",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e =>{
        const {name,value}= e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register =()=>{
        const{name,email,password,reEnterPassword} = user
        if(name && email && password &&(password === reEnterPassword)){
            
            axios.post("http://localhost:9002/register", user)
            .then(res => console.log(res))

        }
        else{
            alert("invalid input")
        }
       
    }
  return (
    <div className="contact">
        <main>
            <h1>Register Me</h1>

            <form action='/register'>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" required placeholder="Abc" value={user.name} onChange={handleChange} />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name="email" required placeholder="Abc@xyz.com"  value={user.email} onChange={handleChange}/>
                </div>

                

                <div>
                    <label>Password</label>
                    <input type="Password" name="password" required placeholder="Password" value={user.password} onChange={handleChange} />
                </div>

                <div>
                    <label>reEnterPass</label>
                    <input type="Password" name="reEnterPassword" required placeholder="Password" value={user.reEnterPassword} onChange={handleChange} />
                </div>


                <button type="submit" onClick={()=>navigate("/Login")}>Login</button>
                <button type="submit" onClick={register}>Register</button>



            </form>
        </main>
    </div>
  )
}

export default Contact