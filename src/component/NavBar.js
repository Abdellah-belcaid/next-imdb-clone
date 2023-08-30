"use client";
import { usePathname } from "next/navigation";
import NavbarItem from "./NavbarItem";

function NavBar() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1]; // Get the first segment;

  return (
    <>
      {(segment === "tv" || segment === "movie" || segment === "") && (
        <div className="flex justify-center dark:bg-gray-600 bg-gray-300 lg:text-2lg p-4  ">
          <NavbarItem title="Trending" param="trending" />
          <NavbarItem title="Top Rated" param="top_rated" />
          <NavbarItem title="Now Playing" param="now_playing" />
          <NavbarItem title="Popular" param="popular" />
        </div>
      )}
    </>
  );
}

export default NavBar;
