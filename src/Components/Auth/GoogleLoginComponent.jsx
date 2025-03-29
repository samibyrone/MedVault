import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = ({ onSuccess }) => {
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        // Extract token or user info
        onSuccess(credentialResponse);
      }}
      onError={() => {
        console.error('Login Failed');
      }}
    />
  );
};

export default GoogleLoginComponent;