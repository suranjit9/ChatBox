import React from "react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  return (
    <div className="shadow-lg p-4 rounded-lg shadow-amber-400 border-t-2 border-amber-400">
      <h1 className="text-center text-2xl font-medium my-2">
        Log in to ChatBox
      </h1>
      <Button className="w-full my-4 gap-2">
        <FaGithub size="24px" /> Login with Github
      </Button>
      <p>
        New To ChatBox?{" "}
        <Link href="/signup" className="underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
