import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react"; // lucide-react icon library

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-center px-4">

            <div className="bg-red-100 p-6 rounded-full shadow-sm mb-6">
                <AlertTriangle className="text-red-500 w-16 h-16" />
            </div>

            <h1 className="text-5xl font-semibold text-gray-700 mb-3">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-2">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-500 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
                <button onClick={() => navigate("/")}
                    className="btn btn-secondary btn-sm">Back to Home</button>
                <button onClick={() => navigate(-1)}
                    className="nav-btn btn-outline btn-sm">Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;