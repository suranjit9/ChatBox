import React from "react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="shadow-lg p-4 rounded-lg shadow-amber-400 border-t-2 border-amber-400">
      <h1 className="text-center text-2xl font-medium my-2">
        Sign Up to ChatBox
      </h1>
      <Button className="w-full my-4 gap-2">
        <FaGithub size="24px" /> Sign up with Github
      </Button>
      <p>
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
