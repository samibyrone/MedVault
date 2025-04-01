import React from "react";
import Button from "../layout/Button.jsx";
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@facebook/react-facebook-login';

export default function SignUp({ onSuccess }) {

    const Signup = ({ closeForm }) => {

        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="popup-form absolute mt-12 text-black">
                    <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
                        <h1 className="text-4xl font-semibold text-center text-backgroundColor">
                            Sign Up
                        </h1>
                        <div className=" flex flex-col">
                            <input className="py-3 px-2 bg-[#d5f2ec] rounded-lg" type="text" name="userFirstName" id="userFirstName" placeholder="First Name" />
                        </div>
                        <div className=" flex flex-col">
                            <input className="py-3 px-2 bg-[#d5f2ec] rounded-lg" type="text" name="userLastName" id="userLastName" placeholder="Last Name" />
                        </div>
                        <div className=" flex flex-col">
                            <input className="py-3 px-2 bg-[#d5f2ec] rounded-lg" type="text" name="userUserName" id="userUserName" placeholder="User Name" />
                        </div>
                        <div className=" flex flex-col">
                            <input className="py-3 px-2 bg-[#d5f2ec] rounded-lg" type="email" name="userEmail" id="userEmail" placeholder="Your Email" />
                        </div>
                        <div className=" flex flex-col">
                            <input className="py-3 px-2 bg-[#d5f2ec] rounded-lg" type="number" name="userNumber" id="userNumber" placeholder="Phone No." />
                        </div>
                        <div className=" flex flex-col">
                            <input className="py-3 px-2 bg-[#d5f2ec] rounded-lg" type="password" name="userPassword" id="userPassword" placeholder="Password" />
                        </div>
                        <div className=" flex gap-5">
                            <Button title="Login" />
                            <button
                                className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
                                onClick={closeForm}
                            >
                                Close
                            </button>
                        </div>
                        <div>
                            <GoogleLogin onSuccess={(credentialResponse) => onSuccess(credentialResponse.credential, 'google')} />
                            <FacebookLogin appId="YOUR_FACEBOOK_APP_ID" autoLoad={false} callback={(response) => onSuccess(response.accessToken, 'facebook')} />
                        </div>
                    </form>
                </div>
            </div>
        );
    };   
};