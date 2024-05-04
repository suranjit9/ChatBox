import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Cha</h1>
        <Input className="w-64 rounded-full" type="text" placeholder="Search" />
      </div>
      <div>
        <Button>Stories</Button>
        <Button variant="secondary">Spotlight</Button>
        <Button variant="ghost">Chat</Button>
        <Button variant={"ghost"}>Lenses</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size={"icon"} className="rounded-full">
          <CgMenuGridO size={25} />
        </Button>
        <Button variant="outline" className="rounded-full">
          Outline
        </Button>
        <Button variant="outline" className="rounded-full">
          Outline
        </Button>
        <Button size={"icon"} variant="outline" className="rounded-full">
          <IoMdLogOut size={25} />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
