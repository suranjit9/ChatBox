import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import headerimg from "../../public/1200.png";

const Header = () => {
  return (
    <div className="flex items-center w-full max-w-6xl gap-4 mx-auto">
      <div className="gap-2">
        <h1 className="text-3xl font-bold mb-3">
          Wellcome to Chat Box And enjoy <br /> your time with yours <br />{" "}
          friends
        </h1>
        <Button variant="outline">Get Started</Button>
      </div>
      <div>
        <Image src={headerimg} alt="header image" width={1200} height={1200} />
      </div>
    </div>
  );
};

export default Header;
