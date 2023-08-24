import NavbarItem from "./NavbarItem";

function NavBar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-2lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default NavBar;
