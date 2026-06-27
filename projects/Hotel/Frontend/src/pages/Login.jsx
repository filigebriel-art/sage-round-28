import { useState ,useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import"../css/Form.css"
export default function Login(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [showPassword,setShowPassword] = useState(false)
    const [isLoading,setIsLoading]= useState(false)
    const [rememberMe,setRememberMe]=useState(false)
     const [error, setError] = useState("");
    const navigate = useNavigate()






      // Check if user was previously remembered


    useEffect(() => {
        const rememberedEmail = localStorage.getItem("rememberedEmail");
        if (rememberedEmail) {
            setEmail(rememberedEmail)
            setRememberMe(true)
        }
    }, [])




    async function handleLogin(e){
        e.preventDefault()
        setError("")

          // Validation
        if (!email.trim() || !password.trim()) {
            setError("Please fill in all fields");
            return;
        }

        setIsLoading(true);


         try {
            const response = await fetch(
                "http://localhost:5000/api/users/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email.trim(),
                        password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {


                // Store token based on remember me


                if (rememberMe) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("rememberedEmail", email.trim());
                } else {
                    sessionStorage.setItem("token", data.token);
                    localStorage.removeItem("rememberedEmail");
                }

                localStorage.setItem("currentUser", JSON.stringify(data.user));
                
                // Notify other tabs and update navbar immediately
                window.dispatchEvent(new Event("storage"));
                window.dispatchEvent(new Event("auth-change"));
                
                alert("Login successful!");
                navigate("/");
            } else {
                setError(data.message || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("Server error. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }




    return(

    <div className="form-container">
            <form onSubmit={handleLogin} className="auth-form">
                <h1>Login</h1>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

                <div className="form-options">
                    <label className="checkbox-label">
                        <input 
                            type="checkbox" 
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span>Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="forgot-link">
                        Forgot password?
                    </Link>
                </div>

                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="submit-btn"
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                <p className="auth-link">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
}