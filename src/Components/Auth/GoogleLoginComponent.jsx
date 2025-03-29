import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = ({ onSuccess }) => {
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
      
        onSuccess(credentialResponse);
      }}
      onError={() => {
        console.error('Login Failed');
      }}
    />
  );
};

export default GoogleLoginComponent;