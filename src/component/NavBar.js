"use client";
import { usePathname } from "next/navigation";
import NavbarItem from "./NavbarItem";

function NavBar() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1]; // Get the first segment;

  return (
    <>
      {(segment === "movies" || segment === "tvShows" || segment === "") && (
        <div className="flex justify-center dark:bg-gray-600 bg-gray-300 lg:text-2lg p-4  ">
          <NavbarItem title="Trending" param="fetchTrending" />
          <NavbarItem title="Top Rated" param="fetchTopRated" />
          <NavbarItem title="Now Playing" param="fetchNowPlaying" />
        </div>
      )}
    </>
  );
}

export default NavBar;
