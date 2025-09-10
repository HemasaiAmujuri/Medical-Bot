import { LuCircleDot } from "react-icons/lu";

function Statusbar() {
  return (
    <div className="h-screen w-screen  bg-blue-900 pt-20">
      <div className="flex items-center w-3/5 px-10 mt-10 ml-80">
        <LuCircleDot className="h-6 w-6 text-black" />

        <div className="flex-grow border-t border-black"></div>

        <LuCircleDot className="h-6 w-6 text-black" />

        <div className="flex-grow border-t border-black"></div>

        <LuCircleDot className="h-6 w-6 text-black" />
      </div>
    </div>
  );
}

export default Statusbar;
