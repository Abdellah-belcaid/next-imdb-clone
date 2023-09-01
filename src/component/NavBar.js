"use client";
import { usePathname } from "next/navigation";
import NavbarItem from "./NavbarItem";

function NavBar() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1]; // Get the first segment;

  return (
    <>
      {(segment === "tv" || segment === "movie" || segment === "") && (
        <div className=" text-white flex justify-center text-xs lg:text-2lg p-4 px-4  bg-gradient-to-tr from-purple-900  to-green-700  overflow-auto ">
          <NavbarItem title="Trending" param="trending" />
          <NavbarItem title="TopRated" param="top_rated" />
          <NavbarItem title="NowPlaying" param="now_playing" />
          <NavbarItem title="Popular" param="popular" />
        </div>
      )}
    </>
  );
}

export default NavBar;
