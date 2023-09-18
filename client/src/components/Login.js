import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Main from "./Main";
import "../styles/LoginScreen.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";

function LoginScreen() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        // Simulate a successful Google authentication
        // In a real application, you would typically handle authentication with an authentication service.
        setIsAuthenticated(true);

        // Redirect to the /main route after authentication
        navigate("/main");
    };

    return (
        <GoogleOAuthProvider
            clientId={
                "563321906379-7setsb6g1ek0uk068ln09if1bi4sjutn.apps.googleusercontent.com"
            }
        >
            <div className="login-screen">
                {!isAuthenticated ? (
                    <div className="login-container">
                        <h1 className="login-title">Login with Google</h1>
                        <GoogleLogin
                            onSuccess={handleGoogleLogin}
                            onError={() =>
                                console.log("Google authentication error")
                            }
                        />
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </GoogleOAuthProvider>
    );
}

export default LoginScreen;
