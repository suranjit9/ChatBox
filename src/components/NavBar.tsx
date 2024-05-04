import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between pt-3 py-3 px-3">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">ChatBox</h1>
        <Input
          className="rounded-full bg-[#f0f1f2] px-4 py-2 border-none "
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <Button variant="ghost">Stories</Button>
        <Button variant="ghost">Spotlight</Button>
        <Button variant="ghost">Chat</Button>
        <Button variant="ghost">Lenses</Button>
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
