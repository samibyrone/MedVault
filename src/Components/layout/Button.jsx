import React from "react";

export const Button = ({ title }) => {
    return (
        <div>
            <button className="items-center text-center bg-aqua text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
                {title}
            </button>
        </div>
    );
};

export default Button;