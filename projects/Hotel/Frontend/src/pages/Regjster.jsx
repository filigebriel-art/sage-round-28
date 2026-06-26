import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import"../css/Form.css"



export default function Register(){
    const [name,setName]=useState("")

    const [email,setEmail]=useState("")

    const [password, setPassword]=useState("")
     const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState("");
     const navigate =useNavigate()

    
   async function handleRegister(e){
        e.preventDefault()
      
        setError("")


         if (!name.trim() || !email.trim() || !password.trim()) {
            setError("Please fill in all fields");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        setIsLoading(true);

       try {
            const response = await fetch(
                "http://localhost:5000/api/users/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim(),
                        password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Registration Successful!");
                navigate("/login");
            } else {
                setError(data.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Registration error:", error);
            setError("Server error. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    
    }
    return(

        <div className="form-container">
         <form onSubmit={handleRegister} className="auth-form">
            <h1>Register</h1>


            {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

            <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            disabled={isLoading}
            required
            
            />

            

            <input
             
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             disabled={isLoading}
             required
             
             />

           
                <div className="password-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="toggle-password"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>

                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="submit-btn"
                >
                    {isLoading ? "Registering..." : "Register"}
                </button>

                <p className="auth-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>


        </form>
        </div>
    
    )
}