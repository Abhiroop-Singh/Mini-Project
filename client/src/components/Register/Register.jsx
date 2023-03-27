import React,{useState} from 'react'

function Register() {
  const [companyName,setCompanyName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleChange = (req)=>{
    if (req.target.name === "companyName") {
    setCompanyName(req.target.value);
    } else if (req.target.name === "email") {
    setEmail(req.target.value);
    } else if (req.target.name === "password") {
    setPassword(req.target.value);
    }
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    
    if(companyName===" " || email===" "|| password===" "){
      return;
    }
    else{
      const data = {companyName,email,password};

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          //always use this
          "content-type": "application/json",
        },
        body: JSON.stringify(data)
      });

      const check = await res.json();

      console.log(check);
    }
  };

  return (
    <div>
      <form method='post' onSubmit={handleSubmit} style={rootDiv}>
      <img
        src="https://i.pinimg.com/736x/d6/d5/4f/d6d54f6e82c996cf2512d70f00bbb756.jpg"
        style={image}
        alt="Grievance"
        /> 

        <input type='text'
        placeholder='CompanyName'
        style={input}
        id="companyName"
        name="companyName" 
        value={companyName} 
        onChange={handleChange} />

        <input type='email'
        placeholder="CompanyEmail" 
        id="email"
        style={input}
        name="email"
        value={email} 
        onChange={handleChange} />
 
        <input type='password'
        placeholder='Password'
        style={input} 
        id="password"
        name="password"
        value={password} 
        onChange={handleChange} />

        <button type='submit' style={button}>
          SignUp
        </button>

      </form>
    </div>
  )
};

export default Register

//styles
const rootDiv = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const input = {
  width: 300,
  padding: 10,
  margin: 10,
  borderRadius: 10,
  outline: "none",
  border: "2px solid grey",
  fontSize: 17,
};

const button = {
  width: 325,
  padding: 10,
  borderRadius: 10,
  margin: 10,
  cursor: "pointer",
  fontSize: 17,
  color: "white",
  backgroundColor: "#9D27CD",
  border: "none",
};

const image = {
  width: 100,
  height: 100,
  objectFit: "contain",
  borderRadius: 40,
};