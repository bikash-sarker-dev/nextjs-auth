"use client";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default LoginButton;
