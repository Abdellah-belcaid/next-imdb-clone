import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaFilm } from "react-icons/fa";
import { IoTvOutline } from "react-icons/io5";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuItem from "../MenuItem";

function Header() {
  return (
    <div className=" flex justify-between mx-2 max-w-6xl  sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title={"Home"} address={"/"} Icon={AiFillHome} />
        <MenuItem title={"Movies"} address={"/movie"} Icon={FaFilm} />
        <MenuItem title={"TvShows"} address={"/tv"} Icon={IoTvOutline} />
        <MenuItem
          title={"About"}
          address={"/about"}
          Icon={BsFillInfoCircleFill}
        />
      </div>
      <div className="flex items-center space-x-2">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="flex px-5">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
