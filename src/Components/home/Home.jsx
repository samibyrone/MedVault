import React from "react";
import Button from "../layout/Button.jsx";

export const Home = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-black bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
            <div className=" w-full lg:w-4/5 space-y-5 mt-10">
                <h1 className="text-5xl font-bold leading-tight">
                    Empowering Health Choices for a Vibrant Life Your Trusted..
                </h1>
                <p>
                    Welcome to MedVault, where we revolutionize the way medical records are stored
                    and accessed. Our platform ensures seamless, secure, and efficient management
                    of patient records, empowering healthcare providers and patients alike.
                </p>

                <Button title="See Services" />
            </div>
        </div>
    );
};

// export default Home;