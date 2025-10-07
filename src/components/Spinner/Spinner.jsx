import React from "react";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;
