import { useState } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(""); // State for the email input (for registration)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // State for tracking errors
    const [confirmationMessage, setConfirmationMessage] = useState(''); // State for tracking confirmation message
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        setError(null); // Clear previous errors
        setConfirmationMessage(''); // Clear previous confirmation messages

        try {
            const data = { username, password };
            if (method === "register") {
                data.email = email;
            }
            console.log("Data being sent:", data);
            const res = await api.post(route, data);
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                setConfirmationMessage('Login successful! Redirecting to Tasky...');
                setTimeout(() => {
                    navigate("/");
                }, 1500); 
            } else {
                setConfirmationMessage('Registration successful! You can now login to Tasky.');
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            if (method === "login") {
                setError("Login failed! Please double check your credentials and try again.");
            } else {
                setError(error.response?.data || "An error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container my-3">
            <form onSubmit={handleSubmit} className="form-container">
                {error && <div className="alert alert-danger">{error}</div>} 
                {confirmationMessage && <div className={`alert alert-${method === 'login' ? 'info' : 'success'}`}>{confirmationMessage}</div>} {/* Display confirmation message */}
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </div>
                {method === "register" && (
                    <div className="mb-3">
                        <input
                            className="form-control"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                )}
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                {loading && <LoadingIndicator />}
                <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                    {name}
                </button>
                {method === "login" && (
                    <div className="mt-3">
                        Don't have an account? <Link to="/register">Sign up!</Link>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Form;
