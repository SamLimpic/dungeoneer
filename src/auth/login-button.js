import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithPopup } = useAuth0();
    return (
        <button
            className="btn btn-primary font-xs px-3 py-2"
            onClick={() => loginWithPopup()}
        >
            Log In
        </button>
    );
};

export default LoginButton;